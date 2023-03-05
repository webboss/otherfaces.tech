import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

import { Button, NLink, Text } from "components";
import { Hr } from "components/hr";
import Container from "components/container";

import RightArrowIcon from "assets/images/svgs/arrow-right.svg";
import { graphql, useStaticQuery } from "gatsby";
import { ArticlePreview, ArticlePreviewList } from "components/article";

export const HomeFeaturedStories = () => {
  const mostRecentStoriesQuery = useStaticQuery(graphql`
    query {
      allWpPost(limit: 4, sort: { order: DESC, fields: date }) {
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
  `);

  const mostRecentStories = mostRecentStoriesQuery.allWpPost.nodes;

  const firstItem = mostRecentStories[0];

  const remainingItems = mostRecentStories.slice(1);
  return (
    <div className="pt-[120px] pb-[160px] relative">
      <Hr className="absolute xl:top-[200px] top-[152px] md:block hidden left-0 w-full " />
      <Container>
        <section className="grid grid-cols-12 gap-3 md:text-left text-center">
          <div className="md:col-span-5 col-span-12 pl-4 relative">
            <div className="absolute bg-gradient-to-t filter mix-blend-multiply from-black to-white  z-10 opacity-80   left-0 right-0 top-0 w-full h-full" />
            <GatsbyImage
              image={
                firstItem.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData
              }
              className="border-[1px] border-red rounded h-[516px]"
            />
          </div>
          <div></div>
          <div className="md:col-span-5 col-span-12 flex flex-col justify-center">
            <div>
              <Text variant="h2">{firstItem.title}</Text>
              <Text variant="p18" className="mb-8" html={firstItem.excerpt} />

              <Button
                href={`/story/${firstItem.slug}`}
                variant="alternative"
                size="large"
                text="Read Story"
              />
            </div>
          </div>
        </section>

        <ArticlePreviewList articles={remainingItems} />
      </Container>
    </div>
  );
};
