import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Button, NLink, Text } from "components";
import { Hr } from "components/hr";
import Container from "components/container";

import RightArrowIcon from "assets/images/svgs/arrow-right.svg";

export const HomeFeaturedStories = () => {
  return (
    <div className="pt-[120px] pb-[160px] relative">
      <Hr className="absolute xl:top-[236px] top-[152px] md:block hidden left-0 w-full " />
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
                A path made easy with the right direction through experienced
                and skilled individual aids smooth learning and perfect practise
                of prospective Tech career. Enjoy
              </Text>

              <Button variant="alternative" size="large" text="Learn More" />
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 mt-[180px]">
          {featuredArticles.map((article, index) => {
            return (
              <FeaturedArticle key={`featured-article-${index}`} {...article} />
            );
          })}
        </section>
      </Container>
    </div>
  );
};

const FeaturedArticle = ({ title, summary }) => {
  return (
    <div className=" relative overflow-hidden">
      <div className="absolute z-10 left-0 right-0 top-0 w-full h-full flex flex-col justify-end">
        <div className="bg-gradient-to-t from-black via-gray-900 to-transparent pl-[29px] md:pr-0 pr-4 pb-[39px] pt-[39px]">
          <Text variant="h5" value={title} isPrimary />
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
