import React from "react";
import { useForm } from "react-hook-form";

import Layout from "components/layout";
import { Input, Newsletter, Text } from "components";
import Container from "components/container";
import ctl from "@netlify/classnames-template-literals";

import { ResourceCategory, ResourcesHeader } from "templates/resources";
import { graphql, useStaticQuery } from "gatsby";
import SearchIcon from "assets/images/svgs/search.svg";
import SearchInfoIcon from "assets/images/svgs/search-info.svg";

const ResourcePage = () => {
  const resourceCategoryQuery = useStaticQuery(RESOURCE_QUERY);

  const allResourcesCategory = resourceCategoryQuery.allWpCategory.nodes.filter(
    category =>
      !!category.resources?.nodes || !!category.resources?.nodes?.length
  );

  const { register, watch } = useForm({
    mode: "onChange",
    defaultValues: { search: "" },
  });

  const searchQuery = watch("search");

  const searchResources = items => {
    const lowercaseSearchQuery = searchQuery?.toLowerCase()?.trim();

    const categoryFilter = items.filter(category =>
      category.name.toLowerCase().includes(lowercaseSearchQuery)
    );

    const resourceFilter = items
      .filter(category =>
        category.resources.nodes.some(node =>
          node.title.toLowerCase().includes(lowercaseSearchQuery)
        )
      )
      .map(category => {
        category.resources.nodes = category.resources.nodes.filter(node =>
          node.title.toLowerCase().includes(lowercaseSearchQuery)
        );

        return category;
      });

    const filteredResult = searchQuery
      ? [...new Set([...categoryFilter, ...resourceFilter])]
      : items;

    return filteredResult;
  };

  const filteredResult = searchResources(allResourcesCategory);

  return (
    <Layout title="Resources">
      <ResourcesHeader />
      <div className={searchWrapperStyle}>
        <SearchIcon />
        <Input
          placeholder="Search Resources"
          className={searchInputStyle}
          register={register("search")}
        />
      </div>
      <Container className={formContainerStyle}>
        {filteredResult.length ? (
          filteredResult.map((resourceCategory, index) => {
            const { name, resources } = resourceCategory;
            return (
              <ResourceCategory
                key={`resource-category-${index}`}
                title={name}
                list={resources.nodes}
              />
            );
          })
        ) : (
          <div className={emptyStateContainer}>
            <SearchInfoIcon />
            <Text variant="p16" className="mt-8 leading-10">
              We couldn’ t find anything matching to your search. <br />
              Try again with different terms
            </Text>
          </div>
        )}
      </Container>
      <section>
        <Newsletter />
      </section>
    </Layout>
  );
};

export default ResourcePage;

const RESOURCE_QUERY = graphql`
  query {
    allWpCategory {
      nodes {
        name
        resources {
          nodes {
            title
            url
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            resourceTypes {
              nodes {
                name
              }
            }
            resourcePayments {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
const formContainerStyle = ctl(`
mb-[160px]
`);

const searchWrapperStyle = ctl(`
    flex
    items-center
    !border-2
    rounded-full
    px-10
    md:px-14
    max-w-[700px]
    md:mx-auto
    mb-20
    mx-5
`);

const searchInputStyle = ctl(`
    placeholder:text-[#4B4B4B]
    border-none
    pb-0
    rounded-none
`);

const emptyStateContainer = ctl(`
  mx-auto
  flex
  flex-col
  items-center
  justify-center
  text-center
`);
