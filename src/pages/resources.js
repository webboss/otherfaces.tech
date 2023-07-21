import React, { useEffect, useState } from "react";

import Layout from "components/layout";
import { Newsletter } from "components";
import Container from "components/container";
import ctl from "@netlify/classnames-template-literals";

import { ResourceCategory, ResourcesHeader } from "templates/resources";
import { graphql, useStaticQuery } from "gatsby";

const ResourcePage = () => {
  const resourceCategoryQuery = useStaticQuery(RESOURCE_QUERY);

  const allResourcesCategory = resourceCategoryQuery.allWpCategory.nodes.filter(
    category =>
      !!category.resources?.nodes || !!category.resources?.nodes?.length
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(allResourcesCategory);

  useEffect(() => {
    if (searchQuery === "") {
      setSearchResult(allResourcesCategory);
    } else {
      const lowercaseSearchQuery = searchQuery.toLowerCase().trim();

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

    return () => {
      setSearchResult(allResourcesCategory);
    };
  }, [searchQuery]);

  return (
    <Layout title="Resources">
      <ResourcesHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
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
