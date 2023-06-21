import ctl from "@netlify/classnames-template-literals";

import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { Text } from "components";
import Container from "components/container";

export const Team = ({ members }) => {
  return (
    <Container className="mt-[-200px]">
      <Text variant="h3">Meet our Team</Text>
      <section className={teamSectionStyle}>
        {members.map((member, index) => {
          return <TeamMember {...member} key={`team-member-${index}`} />;
        })}
      </section>
    </Container>
  );
};

const TeamMember = props => {
  const { title, role, featuredImage } = props;

  return (
    <div>
      <div className={teamImageWrapperStyle}>
        <GatsbyImage
          alt={title}
          image={
            featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData
          }
          className={teamImageStyle}
        />
      </div>

      <div className="mt-4 text-center">
        <Text variant="h5" isPrimary>
          {title}
        </Text>
        <Text variant="p14">{role}</Text>
      </div>
    </div>
  );
};

const teamSectionStyle = ctl(`
grid
lg:grid-cols-4
md:grid-cols-3
grid-cols-2
md:gap-x-8
gap-x-4
md:gap-y-16
gap-y-8
md:pt-[80px]
pt-[32px]
md:pb-[131px]
pb-[65px]
`);

const teamImageWrapperStyle = ctl(`
w-[80%]
mx-auto
gradient-blue-to-red
md:p-1
p-[2px]
rounded-full
`);

const teamImageStyle = ctl(`
h-[226px]
md:h-[320px]
rounded-full
grayscale
`);
