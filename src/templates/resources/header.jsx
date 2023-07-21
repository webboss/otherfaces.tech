import React from "react";
import Container from "components/container";
import { Br, SearchInput, Text } from "components";
import { graphql, useStaticQuery } from "gatsby";

export const ResourcesHeader = ({ searchQuery, setSearchQuery }) => {
  // const resourcesQuery = useStaticQuery(graphql`
  //   query MyQuery {
  //     allWpResource {
  //       totalCount
  //     }
  //   }
  // `);

  // const noOfResources = resourcesQuery.allWpResource.totalCount;
  const noOfResources = 10;
  return (
    <header>
      <Container className="pt-[100px] px-5 md:pb-[100px] pb-[40px] text-center max-w-[1000px]">
        <Text variant="h2">
          {noOfResources}+ resources to kickstart your <Br on="desktop" />{" "}
          non-coding career in tech.
        </Text>
        <Text variant="p16">
          *PS: This is only a directory, we have no affiliation with the brands
          listed
        </Text>

        <div className="max-w-[700px] mx-auto mt-16">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search Resources"
          />
        </div>
      </Container>
    </header>
  );
};
