import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";

import Container from "components/container";
import { Text } from "components";

export const DonateHeader = () => {
  return (
    <header>
      <Container>
        <div className={headerImageWrapper}>
          <StaticImage
            alt="Headshot of members of Other Faces of Tec"
            src="../../assets/images/donate-cover-image.png"
            placeholder="blur"
            className="rounded-full"
          />
        </div>
      </Container>

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
            <Text variant="p18" className="mt-[24px]">
              To make donations, you can use the form below - we accept fiat
              (NGN/USD) and Crypto.
            </Text>
          </div>
        </Container>
      </section>
    </header>
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
