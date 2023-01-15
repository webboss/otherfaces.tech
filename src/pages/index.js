import React, { useState } from "react";

import Layout from "components/layout";
import { Button, Newsletter, Text } from "components";
import Container from "components/container";

const IndexPage = () => {
  return (
    <Layout title="Other Faces of Tech" ignoreSiteName={true}>
      <section>
        <header className="text-primary-100 text-center min-h-screen flex-col flex items-center justify-center">
          <div>
            <Text variant="h1">
              Everyone in tech <span className="line-through">writes code</span>
            </Text>
            <Text variant="p18" className="mt-[20px] mb-20 max-w-[1000px]">
              We are telling the stories of the other faces in tech to inspire
              the next generation of tech bros who probably thinks they need to
              write code to succeed in tech. Through our roadmaps, you also gain
              clarity on the things you need to learn across various levels.
            </Text>
            <Button size="large">Start your journey</Button>
          </div>

          <div className="flex flex-nowrap overflow-hidden mt-32  ">
            {roles.map(role => {
              return (
                <Role
                  name={role}
                  key={role.replace(/\s/g, "-").toLowerCase()}
                />
              );
            })}
          </div>
          <div className="flex flex-nowrap overflow-hidden mt-8  ">
            {roles.reverse().map(role => {
              return (
                <Role
                  name={role}
                  key={role.replace(/\s/g, "-").toLowerCase()}
                />
              );
            })}
          </div>
        </header>

        <Newsletter />

        <section className="text-center py-[90px]">
          <div>
            <Text variant="h2">A clear roadmap for you.</Text>

            <Text variant="p18" className="max-w-[719px] mx-auto mt-[54px]">
              Knowing what to learn at various levels of your career can be
              confusing which is why we are partnering with industry experts in
              order to help create clear roadmaps for you to succeed on your
              tech journey.
            </Text>
          </div>

          <Container>
            <div className="grid grid-cols-3 gap-6 mt-[50px]">
              {roadmaps
                .sort((a, b) => a.comingSoon - b.comingSoon)
                .map(roadmap => {
                  const { title } = roadmap;

                  const key = title.replace(/\s/g, "-").toLowerCase();
                  return <FeaturedRoadMap {...roadmap} key={key} />;
                })}
            </div>
          </Container>
        </section>
      </section>
    </Layout>
  );
};

const Role = ({ name }) => {
  return (
    <Text
      variant="h4"
      as="span"
      className="flex-shrink-0 py-4 px-8 border-2 border-primary-100 inline-block mx-4 rounded-full"
    >
      {name}
    </Text>
  );
};

const FeaturedRoadMap = ({ title, description, comingSoon }) => {
  return (
    <div className="text-left py-7 px-6 bg-opacity-5 rounded-[15px] relative bg-white">
      <Text variant="h4" color="peach">
        {title}
      </Text>
      <Text variant="p18">{description}</Text>
      {comingSoon && (
        <div className="absolute w-full h-full bg-black bg-opacity-50 left-0 top-0 flex items-center justify-center">
          <Text
            variant="p18"
            as="span"
            className="inline-block bg-blue-700 rounded-lg px-2"
          >
            Coming Soon
          </Text>
        </div>
      )}
    </div>
  );
};

const roles = [
  "SEO Writer",
  "Product Designer",
  "Product Manager",
  "Virtual Assistant",
  "Motion Designer",
  "SEO Writer",
  "Product Designer",
  "Product Manager",
  "Virtual Assistant",
  "Motion Designer",
];

const roadmaps = [
  {
    title: "Product Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    comingSoon: true,
  },
  {
    title: "Product Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    comingSoon: false,
  },
  {
    title: "UX ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    comingSoon: false,
  },
  {
    title: "Data Analyst ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    comingSoon: false,
  },
  {
    title: "Content Managment ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    comingSoon: true,
  },
  {
    title: "Digital Marketing ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    comingSoon: false,
  },
];

export default IndexPage;
