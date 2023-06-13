import React from "react";
import Container from "components/container";
import { Text } from "components";
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
      <Container className="py-[124px] text-center max-w-[1000px]">
        <Text variant="h2">
          {noOfResources}+ resources to kickstart your non-coding career in
          tech.
        </Text>
        <div className="max-w-[800px] mx-auto mt-4">
          <Text variant="p18">
            Like you, our path to tech wasn’t straight but yours doesn’t have to
            be like that.
          </Text>
        </div>
      </Container>
    </header>
  );
};
