import React, { useState } from "react";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "components/layout";
import { Br, Button, Newsletter, NLink, Partners, Text } from "components";
import { Hr } from "components/hr";
import Container from "components/container";

import RightArrowIcon from "assets/images/svgs/arrow-right.svg";

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

        <Newsletter />

        <section className="text-center py-[90px]">
          <Partners />
        </section>
      </section>
    </Layout>
  );
};

const team = [
  {
    fullname: "Aremu Oluwagbamila",
    role: "Technical Lead",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/oluwagbamila-smog-aremu-585240129/",
      twitter: "https://twitter.com/aremu_smog",
    },
  },
  {
    fullname: "Alao Ifeoluwa",
    role: "Creative Director",
    socials: {
      linkedin: "https://www.linkedin.com/in/thealaoifeoluwa/",
      twitter: "https://twitter.com/thealaoifeoluwa",
    },
  },
  {
    fullname: "Akinwoye Dolapo",
    role: "Product Manager",
    socials: {
      linkedin: "https://www.linkedin.com/in/akinwoye-dolapo-190123196/",
      twitter: "https://twitter.com/dolapoakinwoye",
    },
  },
  {
    fullname: "Adeniran Simisola",
    role: "Product Designer",
    socials: {
      linkedin: "https://www.linkedin.com/in/simisoladeniran/",
      twitter: "https://twitter.com/simshotit",
    },
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
