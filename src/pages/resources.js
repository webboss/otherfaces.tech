import React from "react";

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
mt-[60px]
mb-[160px]
`);
const arrowsContainerStyle = ctl(`
md:h-[300px]
h-[200px]
md:mt-0
mt-[-100px]
mb-20
overflow-hidden
relative
`);

const arrowLeftStyle = ctl(`
absolute
left-[-100px]
md:bottom-[180px]
bottom-[100px]
md:w-auto
w-[200px]
`);

const arrowRightStyle = ctl(`transform
rotate-180
absolute
right-[-100px]
md:w-auto
w-[200px]
md:bottom-0
bottom-[50px]

`);
