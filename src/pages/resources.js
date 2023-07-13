import React from "react";

import Layout from "components/layout";
import { Newsletter } from "components";
import Container from "components/container";
import ctl from "@netlify/classnames-template-literals";

import { ResourceCategory, ResourcesHeader } from "templates/resources";
import { graphql, useStaticQuery } from "gatsby";

const DonatePage = () => {
  const resourceCategoryQuery = useStaticQuery(graphql`
    query {
      allWpCategory {
        nodes {
          name
          resources {
            nodes {
              title
              url

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
  `);

  // featuredImage {
  //   node {
  //     localFile {
  //       childImageSharp {
  //         gatsbyImageData
  //       }
  //     }
  //   }
  // }
  const allResourcesCategory = resourceCategoryQuery.allWpCategory.nodes.filter(
    category =>
      !!category.resources?.nodes || !!category.resources?.nodes?.length
  );

  return (
    <Layout title="Resources">
      <ResourcesHeader />

      <Container className={formContainerStyle}>
        {allResourcesCategory.map(resourceCategory => {
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

export default DonatePage;

const formContainerStyle = ctl(`
mt-[60px]
mb-[160px]
`);
