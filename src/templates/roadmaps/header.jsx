import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";

import Container from "components/container";
import { Text } from "components";

export const RoadmapsHeader = () => {
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
          <Text variant="h2">A clear roadmap for you.</Text>
          <div className="max-w-[800px] mx-auto mt-8">
            <Text variant="p18">
              Gain clarity on the right steps to kickstart or level up your
              career in tech.
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
md:my-16
mt-16
mb-8
`);
