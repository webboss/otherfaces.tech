import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "components/layout";
import PageHeader from "components/page-header";

const IndexPage = () => (
  <Layout title="Home" ignoreSiteName={true}>
    <PageHeader
      title="FourthCanvas GatsbyJS Projects Starter"
      subheading="This project provides a basic architecture for you, and follows some patterns that we have observed from most of our client projects. 
      It is supposed to help you get started as fast as possible. For detailed instructions, kindly refer to the README.md of this project. Please feel free to bend this project to your will! Delete, add, update files or components as the case may be. Have fun! ✨"
    />
    <section>
      <StaticImage
        src="../assets/images/fourthcanvas.jpg"
        placeholder="blurred"
        alt="FourthCanvas Team"
      />
    </section>
  </Layout>
);

export default IndexPage;
