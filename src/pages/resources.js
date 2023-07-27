import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Layout from "components/layout";
import { Input, Newsletter } from "components";
import Container from "components/container";
import ctl from "@netlify/classnames-template-literals";

import { ResourceCategory, ResourcesHeader } from "templates/resources";
import { graphql, useStaticQuery } from "gatsby";
import SearchIcon from "assets/images/svgs/search.svg";

const ResourcePage = () => {
  const resourceCategoryQuery = useStaticQuery(RESOURCE_QUERY);

  const allResourcesCategory = resourceCategoryQuery.allWpCategory.nodes.filter(
    category =>
      !!category.resources?.nodes || !!category.resources?.nodes?.length
  );

  const [searchResult, setSearchResult] = useState(allResourcesCategory);

  const { register, watch } = useForm({
    mode: "onChange",
  });

  const searchQuery = watch("search");

  useEffect(() => {
    if (searchQuery === "") {
      setSearchResult(allResourcesCategory);
    } else {
      const lowercaseSearchQuery = searchQuery?.toLowerCase()?.trim();

      const filteredResult = allResourcesCategory
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

      setSearchResult(filteredResult);
    }
  }, [searchQuery]);

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
        {searchResult.map(resourceCategory => {
          const { name, resources } = resourceCategory;
          return <ResourceCategory title={name} list={resources.nodes} />;
        })}
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
            # featuredImage {
            #   node {
            #     localFile {
            #       childImageSharp {
            #         gatsbyImageData
            #       }
            #     }
            #   }
            # }
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
