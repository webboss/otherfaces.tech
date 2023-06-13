import ctl from "@netlify/classnames-template-literals";
import { Text, NLink } from "components";
import React from "react";
import RightArrowIcon from "assets/images/svgs/arrow-right.svg";
import { GatsbyImage } from "gatsby-plugin-image";

export const ResourceCategory = ({ title, list = [] }) => {
  const categoryId = title.replace(/\s/g, "-").toLowerCase();
  return (
    <section id={categoryId}>
      <header className="flex items-center">
        <Text variant="h4" className=" mr-9 ">
          {title}
        </Text>
        <hr className="gradient-yellow-to-blue h-[1px] border-0 md:flex hidden flex-1" />
      </header>

      <content className={contentResourceListStyle}>
        {list.map((resource, index) => {
          return (
            <ResourceItem key={categoryId + "-" + index} resource={resource} />
          );
        })}
      </content>
    </section>
  );
};

const ResourceItem = ({ resource }) => {
  const { title, url, resourceTypes, resourcePayments, featuredImage } =
    resource;

  const typeOfResource = resourceTypes?.nodes[0]?.name;
  const paymentOfResource = resourcePayments?.nodes[0]?.name;

  return (
    <div className={resourceItemStyle}>
      <div className="w-full h-full bg-black rounded flex flex-col justify-end ">
        <div className="md:pb-[37px] pb-[4px] relative h-full flex flex-col justify-end overflow-hidden">
          <div className="bg-gradient-to-t absolute bottom-0 left-0 w-full from-black via-black to-transparent    pb-[20px] md:pt-[100px] pt-[40px] z-[2]" />
          {featuredImage && (
            <GatsbyImage
              image={
                featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData
              }
              className="!absolute left-0 right-0 top-0  h-full z-0 "
            />
          )}

          <div className="md:px-[40px] px-3 relative z-10">
            <Text
              variant="h4"
              className="md:!text-[28px] !text-[12px] !pointer-events-autotext-[14px]   leading-4 "
            >
              {title}
            </Text>
            <Text
              variant="p18"
              className="md:text-[18px] text-[8px] md:mt-0 -mt-2"
            >
              {typeOfResource} | {paymentOfResource}
            </Text>
          </div>
        </div>
        <div className="md:h-[100px] h-[40px] flex-shrink-0">
          <hr className="gradient-blue-to-red border-0 h-[1px] " />
          <div className="flex h-full flex-col justify-center md:px-[40px] px-3">
            <NLink
              href={{ url }}
              className="flex md:text-inherit md:text-[16px] font-secondary text-[8px] items-center group"
            >
              View Resource
              <RightArrowIcon className=" transition md:w-auto w-3 transform ml-2 group-hover:translate-x-2" />{" "}
            </NLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const contentResourceListStyle = ctl(`
grid
md:grid-cols-3
grid-cols-2
md:gap-6
gap-2
md:my-[74px]
my-8
`);

const resourceItemStyle = ctl(`
md:h-[521px]
h-[214px]
gradient-blue-to-red 
p-[1px] 
bg-white
rounded
`);
