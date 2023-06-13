import React from "react";
import Container from "components/container";
import { Br, Text } from "components";
import { graphql, useStaticQuery } from "gatsby";

export const ResourcesHeader = () => {
  const resourcesQuery = useStaticQuery(graphql`
    query MyQuery {
      allWpResource {
        totalCount
      }
    }
  `);

  const noOfResources = resourcesQuery.allWpResource.totalCount;
  return (
    <header>
      <Container className="pt-[100px] px-5 md:pb-[100px] pb-[40px] text-center max-w-[1000px]">
        <Text variant="h2">
          {noOfResources}+ resources to kickstart your <Br on="desktop" />{" "}
          non-coding career in tech.
        </Text>
        <div className="max-w-[800px] mx-auto mt-4"></div>
      </Container>
    </header>
  );
};
