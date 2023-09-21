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

  const allResourcesCategory =
    resourceCategoryQuery?.contentfulResources?.category;
  const allResources = resourceCategoryQuery?.allContentfulResources?.nodes;

  const categoriesWithResources = allResourcesCategory
    .map(category => {
      const resources = allResources.filter(resource =>
        resource.category.includes(category)
      );
      return {
        category,
        resources,
      };
    })
    .filter(category => !!category.resources.length);

  const { register, watch } = useForm({
    mode: "onChange",
    defaultValues: { search: "" },
  });

  const searchQuery = watch("search");

  const searchResources = items => {
    const lowercaseSearchQuery = searchQuery?.toLowerCase()?.trim();
    const categoryFilter = items.filter(category =>
      category.toLowerCase().includes(lowercaseSearchQuery)
    );
    return categoryFilter;
  };

  const filteredResult = searchQuery
    ? searchResources(allResourcesCategory)
    : categoriesWithResources;

  return (
    <Layout
      title="Resources"
      description="Carefully selected books, schools, courses to kickstart and supercharge your non-coding career in tech "
    >
      <ResourcesHeader />
      <div className={searchWrapperStyle}>
        <SearchIcon className="md:w-auto w-[24px]" />
        <Input
          placeholder="Search Resources e.g Product Design"
          className={searchInputStyle}
          register={register("search")}
        />
      </div>
      <Container className={formContainerStyle}>
        {filteredResult.length ? (
          filteredResult.map((resourceCategory, index) => {
            const { category, resources } = resourceCategory;
            return (
              <ResourceCategory
                key={`resource-category-${index}`}
                title={category}
                list={resources}
              />
            );
          })
        ) : (
          <div className={emptyStateContainer}>
            <SearchInfoIcon />
            <Text variant="p16" className="mt-8 leading-10">
              <>
                We couldn’ t find anything matching to your search. <br />
                Try again with different terms
              </>
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
    contentfulResources(title: { eq: "All Categorization" }) {
      category
    }
    allContentfulResources(filter: { title: { ne: "All Categorization" } }) {
      nodes {
        title
        url
        paymentType
        resourceType
        category
        featuredImage {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
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
    !border-[1.5px]
    !md:border-2
    rounded-full
    px-4
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
