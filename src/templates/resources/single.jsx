import React from "react";

import Layout from "components/layout";
import { Newsletter } from "components";
import Container from "components/container";
import ctl from "@netlify/classnames-template-literals";

import { ResourceCategory, ResourcesHeader } from "templates/resources";
import { graphql } from "gatsby";

const ResourcePage = ({ data }) => {
  const { name, resources } = data.wpCategory ?? {};

  const totalCount = resources.nodes.length;
  return (
    <Layout title="Resources">
      <ResourcesHeader title={name} totalCount={totalCount} />

      <Container className={formContainerStyle}>
        <ResourceCategory list={resources.nodes} />
      </Container>
      <section>
        <Newsletter />
      </section>
    </Layout>
  );
};

export default ResourcePage;

export const pageQuery = graphql`
  query ResourcePageQuery($slug: String) {
    wpCategory(slug: { eq: $slug }) {
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
`;
const formContainerStyle = ctl(`
mb-[160px]
`);
