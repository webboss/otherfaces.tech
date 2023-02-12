import React, { useState } from "react";

import { StaticImage } from "gatsby-plugin-image";

import ctl from "@netlify/classnames-template-literals";

import Layout from "components/layout";
import { Br, Button, Newsletter, NLink, Partners, Text } from "components";
import Container from "components/container";

const DonatePage = () => {
  return (
    <Layout title="Donate">
      <header>
        <Container>
          <div className={headerImageWrapper}>
            <StaticImage
              alt="Headshot of members of Other Faces of Tec"
              src="../assets/images/donate-cover-image.png"
              placeholder="blur"
              className="rounded-full"
            />
          </div>
        </Container>
      </header>
      <section className="py-8 text-center">
        <Container>
          <Text variant="h2">Support our work</Text>
          <div className="max-w-[800px] mx-auto mt-8">
            <Text variant="p18">
              The work we do is largely funded by individuals who buy our merch
              and organizations who make direct donations. We are committed to
              inspiring the next generation of Africans getting into tech while
              providing clear roadmaps they can take to succeed.
            </Text>
            <Text variant="p18" className="mt-[34px]">
              To make donations, you can use the form below - we accept Naira
              and Cryptocurrency.
            </Text>
          </div>
        </Container>
      </section>
      <section>
        <Newsletter />
      </section>
    </Layout>
  );
};

const headerImageWrapper = ctl(`
gradient-blue-to-red
md:p-1
p-[2px]
md:max-w-[80%]
mx-auto
rounded-full
my-16
`);

export default DonatePage;
