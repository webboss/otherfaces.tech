import React, { useState } from "react";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "components/layout";
import { Br, Button, Newsletter, NLink, Partners, Text } from "components";
import Container from "components/container";
import ctl from "@netlify/classnames-template-literals";

const AboutPage = () => {
  return (
    <Layout title="Other Faces of Tech" ignoreSiteName={true}>
      <section>
        <header className="text-primary-100 text-center min-h-screen flex-col flex items-center justify-center">
          <Container>
            <Text variant="h1" weight="500">
              We are
            </Text>

            <div className="md:max-w-[950px] max-w-[700px] mx-auto  ">
              <Text variant="p18" className="mt-[20px] mb-20 max-w-[1000px]">
                Like you, our path to tech wasn’t straight but yours doesn’t
                have to be like that.
              </Text>
            </div>
          </Container>
        </header>

        <Container>
          <section className={teamSectionStyle}>
            {team.map((member, index) => {
              return <TeamMember {...member} key={`team-member-${index}`} />;
            })}
          </section>
        </Container>
        <Newsletter />

        <section className="text-center py-[90px]">
          <Partners />
        </section>
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
md:w-[80%]
md:max-w-[277px] max-w-[200px]
mx-auto
rounded-full
gradient-blue-to-red
p-1
`);

const teamImageStyle = ctl(
  ` md:h-[329px] h-[250px] rounded-full object-cover object-center   `
);
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
