import React from "react";
import { Hr } from "components/hr";
import Container from "components/container";

import { graphql, useStaticQuery } from "gatsby";
import { ArticlePreviewLarge, ArticlePreviewList } from "components/article";

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
        <ArticlePreviewLarge
          title={firstItem?.title}
          slug={firstItem?.slug}
          role={firstItem?.role}
          featuredImage={firstItemFeaturedImage}
        />
        <ArticlePreviewList articles={remainingItems} />
      </Container>
    </div>
  );
};
