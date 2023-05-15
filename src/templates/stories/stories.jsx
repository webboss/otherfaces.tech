import { Button, Text } from "components";
import { ArticlePreviewList } from "components/article";
import Container from "components/container";
import { Hr } from "components/hr";
import Layout from "components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";

import CopyIcon from "assets/images/svgs/copy.svg";
import Share from "./components/share";

const Story = ({ data }) => {
  const { title, content, date, author, featuredImage, slug } = data.wpPost;

  const relatedStories = data.allWpPost.nodes;
  return (
    <Layout title={title} ignoreSiteName>
      <Container className="md:py-[100px] py-[50px] ">
        <article className="">
          <header>
            <MetaData date={date} />
            <Author author={author} />
            <Text variant="h3" value={title} />
            <GatsbyImage
              image={
                featuredImage.node.localFile.childImageSharp.gatsbyImageData
              }
              className="w-full md:rounded-[100px] rounded-[50px] md:h-auto h-[370px] my-[45px]"
            />
          </header>

          <section className="flex md:flex-row flex-col justify-between relative">
            <content
              className="article max-w-[738px] flex-grow-0"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <aside>
              <div className="md:sticky md:mt-0 mt-8 top-4">
                <Text variant="p16" value="SHARE" />
                <Share />
                <CopyButton />
              </div>
            </aside>
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

const CopyButton = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copyLink = async () => {
    await navigator.clipboard.writeText(document.location);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };
  return (
    <button
      onClick={copyLink}
      className="flex items-center min-w-[120px] hover:opacity-70 "
    >
      <CopyIcon />
      <span className="inline-block ml-4 ">
        {" "}
        {isCopied ? "Copied!" : "Copy Link"}
      </span>
    </button>
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
  return (
    <div className="mb-[22px] flex items-center">
      <StaticImage
        src="../../assets/images/avatar.png"
        className="md:mr-[19px] mr-[10px] md:w-[42px] w-[28px] md:h-[42px] h-[28px]"
      />

      <Text
        value={authorInfo.name}
        variant="p18"
        className=" uppercase !mb-0"
      />
    </div>
  );
};

export const pageQuery = graphql`
  query StoryQuery($slug: String) {
    wpPost(slug: { eq: $slug }) {
      title
      slug
      content
      date(formatString: "LL")
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED, height: 695)
            }
          }
        }
      }

      author {
        node {
          name
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
        excerpt
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
export default Story;
