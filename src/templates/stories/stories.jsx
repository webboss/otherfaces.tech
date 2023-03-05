import { Button, Text } from "components";
import { ArticlePreviewList } from "components/article";
import Container from "components/container";
import { Hr } from "components/hr";
import Layout from "components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";

import TwitterIcon from "assets/images/svgs/twitter.svg";
import MailIcon from "assets/images/svgs/mail.svg";
import LinkedInIcon from "assets/images/svgs/linkedin.svg";
import FacebookIcon from "assets/images/svgs/facebook.svg";
import CopyIcon from "assets/images/svgs/copy.svg";

const Story = ({ data }) => {
  const { title, content, date, author, featuredImage, slug } = data.wpPost;

  const relatedStories = data.allWpPost.nodes;
  return (
    <Layout title={title} ignoreSiteName>
      <Container className="py-[158px] ">
        <article className="article">
          <header>
            <MetaData date={date} />
            <Author author={author} />
            <Text variant="h3" value={title} />
            <GatsbyImage
              image={
                featuredImage.node.localFile.childImageSharp.gatsbyImageData
              }
              className="w-full rounded-[100px] my-[90px]"
            />
          </header>

          <section className="flex justify-between relative">
            <content
              className="max-w-[738px] flex-grow-0"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <aside>
              <div className="sticky top-4">
                <Text variant="p16" value="SHARE" />
                <ShareIcons title={title} />
                <button
                  onClick={copyLink}
                  className="flex items-center min-w-[120px] hover:opacity-70 "
                >
                  <CopyIcon />
                  <span className="inline-block ml-4 "> Copy Link</span>
                </button>
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

const ShareIcons = ({ title }) => {
  return (
    <ul className="flex justify-between mb-8 mt-6">
      {icons.map(({ Icon, share, isLink }) => {
        return (
          <a
            href={isLink ? share(title) : "#"}
            onClick={() => (!isLink ? share(title) : null)}
            className="hover:opacity-70"
          >
            <Icon />
          </a>
        );
      })}
    </ul>
  );
};

const url = document.location;
const popupWindow = link => {
  window.open(link, "popup", "width=600,height=600");
};
const icons = [
  {
    Icon: TwitterIcon,
    share: title =>
      popupWindow(`https://twitter.com/share?text=${title}&url=${url}`),
  },
  {
    Icon: MailIcon,
    share: title => `mailto: ?subject=${title}&body=${url}`,
    isLink: true,
  },
  {
    Icon: LinkedInIcon,
    share: title =>
      popupWindow(
        `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`
      ),
  },
  {
    Icon: FacebookIcon,
    share: title =>
      popupWindow(
        `https://www.facebook.com/sharer.php?u=${url}&p[title]=${title}`
      ),
  },
];
const copyLink = () => {
  navigator.clipboard.writeText(document.location);
};
const MetaData = ({ date, readTime = "4" }) => {
  return (
    <div className="flex gap-10 mb-8">
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
    <div className="mb-[44px] flex items-center">
      <StaticImage src="../../assets/image/avatar.png" />

      <Text value={authorInfo.name} variant="p18" className=" capitalize " />
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
