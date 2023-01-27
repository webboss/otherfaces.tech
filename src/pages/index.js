import React, { useState } from "react";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "components/layout";
import { Br, Button, Newsletter, NLink, Partners, Text } from "components";
import { Hr } from "components/hr";
import Container from "components/container";

import RightArrowIcon from "assets/images/svgs/arrow-right.svg";

const IndexPage = () => {
  return (
    <Layout title="Other Faces of Tech" ignoreSiteName={true}>
      <section>
        <header className="text-primary-100 text-center min-h-screen flex-col flex items-center justify-center">
          <Container>
            <Text variant="h1" weight="500">
              Everyone in tech <Br on="mobile" />
              <span className="line-through">writes code</span>
            </Text>

            <div className="md:max-w-[950px] max-w-[700px] mx-auto  ">
              <Text variant="p18" className="mt-[20px] mb-20 max-w-[1000px]">
                We are telling the stories of the other faces in tech to inspire
                the next generation of tech bros who probably thinks they need
                to write code to succeed in tech. Through our roadmaps, you also
                gain clarity on the things you need to learn across various
                levels.
              </Text>
            </div>
            <Button size="large">Start your journey</Button>
          </Container>

          <div className=" w-full overflow-hidden">
            <div className="flex flex-nowrap mt-32  ">
              {roles.map(role => {
                return (
                  <Role
                    name={role}
                    key={role.replace(/\s/g, "-").toLowerCase()}
                  />
                );
              })}
            </div>
            <div className="flex flex-nowrap mt-8  ">
              {roles.reverse().map(role => {
                return (
                  <Role
                    name={role}
                    key={role.replace(/\s/g, "-").toLowerCase()}
                  />
                );
              })}
            </div>
          </div>
        </header>

        <div className="pt-[120px] pb-[160px] relative">
          <Hr className="absolute top-[236px] md:block hidden left-0 w-full " />
          <Container>
            <section className="grid grid-cols-12 gap-3 md:text-left text-center">
              <div className="md:col-span-5 col-span-12 pl-4 relative">
                <div className="absolute bg-gradient-to-t filter mix-blend-multiply from-black to-white  z-10 opacity-80   left-0 right-0 top-0 w-full h-full" />
                <StaticImage
                  alt="Otherfaces of Tech"
                  src="../assets/images/portrait.png"
                  className="border-[1px] border-red rounded"
                />
              </div>
              <div></div>
              <div className="md:col-span-5 col-span-12 flex flex-col justify-center">
                <div>
                  <Text variant="h2">Learn . Read . Practise it.</Text>
                  <Text variant="p18" className="mb-8">
                    A path made easy with the right direction through
                    experienced and skilled individual aids smooth learning and
                    perfect practise of prospective Tech career. Enjoy
                  </Text>

                  <Button
                    variant="alternative"
                    size="large"
                    text="Learn More"
                  />
                </div>
              </div>
            </section>

            <section className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 mt-[180px]">
              {featuredArticles.map((article, index) => {
                return (
                  <FeaturedArticle
                    key={`featured-article-${index}`}
                    {...article}
                  />
                );
              })}
            </section>
          </Container>
        </div>
        <Newsletter />

        <section className="text-center py-[90px]">
          <Container>
            <Text variant="h2">A clear roadmap for you.</Text>

            <Text variant="p18" className="max-w-[719px] mx-auto mt-[54px]">
              Knowing what to learn at various levels of your career can be
              confusing which is why we are partnering with industry experts in
              order to help create clear roadmaps for you to succeed on your
              tech journey.
            </Text>
          </Container>

          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[50px]">
              {roadmaps
                .sort((a, b) => a.comingSoon - b.comingSoon)
                .map(roadmap => {
                  const { title } = roadmap;

                  const key = title.replace(/\s/g, "-").toLowerCase();
                  return <FeaturedRoadMap {...roadmap} key={key} />;
                })}
            </div>
          </Container>

          <Partners />
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
      <Text variant="h4" color="peach" className=" mb-2">
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

const FeaturedArticle = ({ title, summary }) => {
  return (
    <div className=" relative overflow-hidden">
      <div className="absolute z-10 left-0 right-0 top-0 w-full h-full flex flex-col justify-end">
        <div className="bg-gradient-to-t from-black via-gray-900 to-transparent pl-[29px] md:pr-0 pr-4 pb-[39px] pt-[39px]">
          <Text variant="h5" value={title} />
          <Text variant="p16" value={summary} className="max-w-[345px]" />
          <NLink to="/" className="flex items-center mt-2">
            Read more <RightArrowIcon className="ml-2" />{" "}
          </NLink>
        </div>
      </div>
      <StaticImage
        alt="Otherfaces of Tech"
        src="../assets/images/portrait.png"
        className="border-[1px] border-red rounded"
      />
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

const featuredArticles = [
  {
    title: "Practise It",
    summary: "A path made easy with the right direction through experienced.",
  },
  {
    title: "Practise It",
    summary: "A path made easy with the right direction through experienced.",
  },
  {
    title: "Practise It",
    summary: "A path made easy with the right direction through experienced.",
  },
];
export default IndexPage;
