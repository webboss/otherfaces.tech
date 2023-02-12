import React, { useState } from "react";

import { StaticImage } from "gatsby-plugin-image";
import ReactRotatingText from "react-rotating-text";
import ctl from "@netlify/classnames-template-literals";

import Layout from "components/layout";
import { Br, Button, Newsletter, NLink, Partners, Text } from "components";
import Container from "components/container";
import ArrowIcon from "assets/images/svgs/arrow.svg";

const AboutPage = () => {
  return (
    <Layout title="About us">
      <section>
        <header className="text-primary-100 text-center min-h-[40vh] pt-12 flex-col flex items-center justify-center">
          <Container>
            <Text variant="h1" weight="500">
              We are{" "}
              <ReactRotatingText
                pause={1000}
                typingInterval={50}
                deletingInterval={50}
                items={[
                  "Managers",
                  "Engineers",
                  "Designers",
                  "3D Artists",
                  "Writers",
                ]}
              />
            </Text>

            <div className="md:max-w-[950px] max-w-[700px] mx-auto  ">
              <Text variant="p18" className="mt-[20px] mb-20 max-w-[1000px]">
                Like you, our path to tech wasn’t straight but yours doesn’t
                have to be like that.
              </Text>
            </div>
          </Container>
        </header>
        <div className="h-[300px] mb-20 overflow-hidden relative ">
          <ArrowIcon className="absolute left-[-100px]" />
          <ArrowIcon className=" transform rotate-180 absolute right-[-100px] bottom-0" />
        </div>

        <Container className="mt-[-200px]">
          <Text variant="h3">Meet our Team</Text>
          <section className={teamSectionStyle}>
            {team.map((member, index) => {
              return <TeamMember {...member} key={`team-member-${index}`} />;
            })}
          </section>
        </Container>
        <Newsletter />

        <Partners />
      </section>
    </Layout>
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

const TeamMember = props => {
  const { fullname, role, socials, image } = props;

  return (
    <div>
      <div className={teamImageWrapperStyle}>
        {image ? (
          image
        ) : (
          <StaticImage
            alt="Otherfaces of Tech"
            src="../assets/images/portrait.png"
            className={teamImageStyle}
          />
        )}
      </div>

      <div className="mt-4 text-center">
        <Text variant="h5">{fullname}</Text>
        <Text variant="p14">{role}</Text>
      </div>
    </div>
  );
};

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
`);
const team = [
  {
    fullname: "Aremu Oluwagbamila",
    role: "Errand Boy",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/oluwagbamila-smog-aremu-585240129/",
      twitter: "https://twitter.com/aremu_smog",
    },

    image: (
      <StaticImage
        alt="Aremu Oluwagbamila"
        src="../assets/images/team/aremu-oluwagbamila.jpg"
        className={teamImageStyle}
      />
    ),
  },
  {
    fullname: "Alao Ifeoluwa",
    role: "Creative Director",
    socials: {
      linkedin: "https://www.linkedin.com/in/thealaoifeoluwa/",
      twitter: "https://twitter.com/thealaoifeoluwa",
    },
    image: (
      <StaticImage
        alt="Alao Ifeoluwa"
        src="../assets/images/team/alao-ifeoluwa.jpg"
        className={teamImageStyle}
      />
    ),
  },
  {
    fullname: "Akinwoye Dolapo",
    role: "Product Manager",
    socials: {
      linkedin: "https://www.linkedin.com/in/akinwoye-dolapo-190123196/",
      twitter: "https://twitter.com/dolapoakinwoye",
    },

    image: (
      <StaticImage
        alt="Akinwoye Dolapo"
        src="../assets/images/team/akinwoye-dolapo.jpg"
        className={teamImageStyle}
      />
    ),
  },
  {
    fullname: "Adeniran Simisola",
    role: "Product Designer",
    socials: {
      linkedin: "https://www.linkedin.com/in/simisoladeniran/",
      twitter: "https://twitter.com/simshotit",
    },
    image: (
      <StaticImage
        alt="Adeniran Simisola"
        src="../assets/images/team/adeniran-simisola.jpg"
        className={teamImageStyle}
      />
    ),
  },
  {
    fullname: "Afolabi Praise",
    role: "Motion Designer",
    socials: {
      linkedin: "https://www.linkedin.com/in/folabipraise/",
      twitter: "https://twitter.com/folabipraise/",
    },
  },
  {
    fullname: "Akobi Tomiwa",
    role: "Legal",
    socials: {
      twitter: "https://twitter.com/tomiwa_dan",
    },
  },
  {
    fullname: "Osunkoya Oluwadamilola",
    role: "Community Manager",
    socials: {
      twitter: "https://twitter.com/enioluwadalola",
    },
  },
  {
    fullname: "Alao Michael",
    role: "3D Artist",
    socials: {
      linkedin: "https://www.linkedin.com/in/michael-alao-9ba354248",
      twitter: "https://twitter.com/Mickolo1A",
    },
  },
  {
    fullname: "Ajiboye Ebenezer",
    role: "Cinematographer",
    socials: {
      twitter: "twitter.com/ajiboyeebenezer",
    },
  },
];

export default AboutPage;
