import React from "react";

import { Button, Text } from "components";
import { Hr } from "components/hr";
import Container from "components/container";

import { graphql, useStaticQuery } from "gatsby";
import { ArticlePreviewList } from "components/article";
import { ImageWithMock } from "components/image-with-mock";

export const HomeFeaturedStories = () => {
  const mostRecentStoriesQuery = useStaticQuery(graphql`
    query {
      allWpPost(limit: 4) {
        nodes {
          title
          slug
          excerpt
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
        }
      }
    }
  `);

  const mostRecentStories = mostRecentStoriesQuery.allWpPost.nodes;
  const firstItem = mostRecentStories[0];

  const remainingItems = mostRecentStories.slice(1);

  const firstItemFeaturedImage = firstItem?.featuredImage;
  return (
    <div className="pt-[120px] pb-[160px]  relative" id="recent-stories">
      <Hr className="absolute xl:top-[200px] top-[152px] md:block hidden left-0 w-full " />
      <Container>
        <section className="grid grid-cols-12 gap-3 md:text-left text-center">
          <div className="gradient-blue-to-red p-[1px] md:col-span-5  rounded col-span-12 ">
            <div className=" overflow-hidden relative">
              <div className="absolute bg-gradient-to-t rounded filter mix-blend-multiply from-black to-white  z-10 opacity-80   left-0 right-0 top-0 w-full h-full" />

              <ImageWithMock
                image={firstItemFeaturedImage}
                className="rounded md:h-[516px] h-[356px]"
              />
            </div>
          </div>
          <div></div>
          <div className="md:col-span-5 col-span-12 flex flex-col justify-center">
            <div>
              <Text variant="h2">{firstItem.title}</Text>
              <Text
                variant="p18"
                value={firstItem.role}
                className=" mt-1 mb-4 "
              />

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
