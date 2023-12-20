import { Button, Text } from "components";
import { ArticlePreviewList } from "components/article";
import Container from "components/container";
import { Hr } from "components/hr";
import Layout from "components/layout";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { readingTime } from "reading-time-estimator";
import React from "react";
import parse from "html-react-parser";
import { sanitize } from "isomorphic-dompurify";

import Share, { popupWindow, url } from "./components/share";
import CopyButton from "./components/copy-button";
import { ImageWithMock } from "components/image-with-mock";

const Blockquote = ({ node }) => {
  const urlLength = `${url}`.length;
  const tweetLength = 280;
  const expectedStringLength = tweetLength - urlLength;

  const firstParagraph = `${node[0].children[0].data}`.substring(
    0,
    expectedStringLength
  );
  return (
    <div
      className="bg-primary-200
    bg-opacity-5 p-6 rounded-3xl my-4"
    >
      <blockquote>
        {node.map(nodeItem => {
          const Element = nodeItem.name;
          return <Element>{nodeItem.children[0].data}</Element>;
        })}
      </blockquote>
      <div>
        <Button
          onClick={() =>
            popupWindow(
              `https://twitter.com/share?text=${firstParagraph}&url=${url}`
            )
          }
        >
          Tweet this
        </Button>
      </div>
    </div>
  );
};

const Story = ({ data }) => {
  const { title, content, date, author, role, excerpt, featuredImage } =
    data.wpPost ?? {};

  const readTime = readingTime(content);
  const relatedStories = data.allWpPost.nodes;

  const purifiedContent = sanitize(content?.replace(/\n/gi, ""));

  return (
    <Layout title={title} description={excerpt}>
      <Container className="md:py-[100px] py-[50px] ">
        <article>
          <header className="article-header">
            <MetaData date={date} readTime={readTime.minutes} />
            <Author author={author} />
            <Text variant="h3">
              {/* The weird symbole here is em-dash */}
              {title} &#8212; {role}
            </Text>

            <ImageWithMock
              image={featuredImage}
              className="w-full object-top  md:rounded-[100px] rounded-[50px] md:h-auto h-[370px] my-[45px] "
            />
          </header>

          <section className="flex md:flex-row flex-col-reverse justify-between relative">
            <aside>
              <div className="md:sticky md:mt-0 mt-8 top-4">
                <Text variant="p16" value="SHARE" />
                <Share title={title} />
                <CopyButton />
              </div>
            </aside>
            <content className="article max-w-[738px] flex-grow-0">
              {parse(purifiedContent, {
                replace: domNode => {
                  if (domNode.name === "blockquote") {
                    return <Blockquote node={domNode.children} />;
                  }
                },
              })}
            </content>
            <div></div>
          </section>
        </article>
      </Container>
      <Hr />

      <Container className="mb-[116px]">
        <ArticlePreviewList heading="More Stories" articles={relatedStories} />
      </Container>
    </Layout>
  );
};

const MetaData = ({ date, readTime = "4" }) => {
  return (
    <div className="flex md:justify-start justify-between gap-10 mb-[22px]">
      <Text value={date} variant="p18" className=" uppercase " />
      <Text
        value={`${readTime} Mins Read`}
        variant="p18"
        className=" uppercase "
      />
    </div>
  );
};

const Author = ({ author }) => {
  const authorInfo = author.node;

  const { firstName, lastName, name } = authorInfo;

  const hasFullname = firstName && lastName;
  const fullName = firstName + " " + lastName;

  const nameToShow = hasFullname ? fullName : name;

  return (
    <div className="mb-[22px] flex items-center">
      <StaticImage
        src="../../assets/images/avatar.png"
        className="md:mr-[19px] mr-[10px] md:w-[42px] w-[28px] md:h-[42px] h-[28px]"
      />

      <Text value={nameToShow} variant="p18" className=" uppercase !mb-0" />
    </div>
  );
};

export const pageQuery = graphql`
  query StoryQuery($slug: String) {
    wpPost(slug: { eq: $slug }) {
      title
      slug
      content
      excerpt
      date(formatString: "LL")
      role
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      author {
        node {
          name
          firstName
          lastName
        }
      }
    }

    allWpPost(
      filter: { slug: { ne: $slug } }
      limit: 3
      sort: { order: DESC, fields: date }
    ) {
      nodes {
        title
        slug
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        excerpt
        role
      }
    }
  }
`;
export default Story;
