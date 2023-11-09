import React, { Key } from "react";

import Layout from "components/layout";
import { Newsletter, Text, Br } from "components";
import Container from "components/container";
import ctl from "@netlify/classnames-template-literals";

import { graphql, useStaticQuery } from "gatsby";
import { ArticlePreviewLarge, ArticlePreviewList } from "components/article";
import { Hr } from "components/hr";

const StoriesPage = () => {
  const allStoriesQuery = useStaticQuery(ALL_STORIES_QUERY);

  const allStories = allStoriesQuery.allWpPost.nodes ?? [];

  const noOfStories = allStories.length;
  const noOfItemsPerGroup = 4;

  const noOfGroups = Math.ceil(noOfStories / noOfItemsPerGroup);
  const arrayGroups = new Array(noOfGroups).fill(null).map((_, idx) => {
    const startIndex = idx * noOfItemsPerGroup;
    const endIndex = startIndex + noOfItemsPerGroup;
    return allStories.slice(startIndex, endIndex);
  });

  return (
    <Layout
      title="Stories"
      description="Get inspired by the top non-coding techies out of Africa"
    >
      <header>
        <Container className=" pt-[150px] px-5 pb-[50px]  text-center max-w-[1000px]">
          <Text variant="h1" weight="500">
            <>
              Get inspired by the top <Br on="desktop" /> non-coding techies out
              of Africa
            </>
          </Text>
        </Container>
      </header>
      <>
        {arrayGroups.map((arrayGroup, idx) => {
          const firstItem = arrayGroup[0];
          const remainingItems = arrayGroup.slice(1);

          const key = `stories-group-${idx}` as Key;
          return (
            <div className="md:pt-[120px] relative">
              <Hr className="absolute xl:top-[200px] top-[152px] md:block hidden left-0 w-full " />
              <Container>
                <ArticlePreviewLarge {...firstItem} key={key} />
                <ArticlePreviewList heading="" articles={remainingItems} />
              </Container>
            </div>
          );
        })}
      </>
      <section>
        <Newsletter />
      </section>
    </Layout>
  );
};

export default StoriesPage;

const ALL_STORIES_QUERY = graphql`
  query AllStoriesQuery {
    allWpPost {
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
`;
