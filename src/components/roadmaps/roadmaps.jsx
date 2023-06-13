import React from "react";
import { Text } from "components";
import Container from "components/container";
import { Link } from "gatsby";

export const Roadmaps = () => {
  return (
    <section className="text-center">
      <Container>
        <Text variant="h2">A clear roadmap for you.</Text>

        <Text variant="p18" className="max-w-[719px] mx-auto mt-[54px]">
          Knowing what to learn at various levels of your career can be
          confusing which is why we are partnering with industry experts in
          order to help create clear roadmaps for you to succeed on your tech
          journey.
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
    </section>
  );
};

const FeaturedRoadMap = ({ title, description, comingSoon }) => {
  return (
    <Link to="/roadmaps">
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
    </Link>
  );
};

const roadmaps = [
  {
    title: "Product Design",
    description:
      "The process of imagining, creating, and iterating products that solve users' problems or address specific needs in a given market",
    comingSoon: false,
  },
  {
    title: "Product Management",
    description:
      "This is an organizational function that guides every step of a product's lifecycle.",
    comingSoon: false,
  },
  {
    title: "UX ",
    description:
      "The practice of writing carefully considered information that addresses people's contexts, needs, and behaviors. ",
    comingSoon: false,
  },
  {
    title: "Data Analytics ",
    description:
      "The process of examining data sets in order to find trends and draw conclusions about the information they contain.",
    comingSoon: false,
  },
  {
    title: "Community Managment ",
    description:
      "The process of building an authentic community among a business's customers, employees, and partners.",
    comingSoon: false,
  },
  {
    title: "Digital Marketing ",
    description:
      "The promotion of brands to connect with potential customers using the internet and other forms of digital communication.",
    comingSoon: false,
  },
];
