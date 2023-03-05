import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { NLink, Text } from "components";

import RightArrowIcon from "assets/images/svgs/arrow-right.svg";

const ArticlePreview = ({ title, slug, featuredImage, excerpt }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute z-10 left-0 right-0 top-0 w-full h-full flex flex-col justify-end">
        <div className="bg-gradient-to-t from-black via-gray-900 to-transparent pl-[29px] md:pr-0 pr-4 pb-[39px] pt-[39px]">
          <Text variant="h5" value={title} isPrimary />
          <Text variant="p16" html={excerpt} className="max-w-[345px]" />
          <NLink to={`/story/${slug}`} className="flex items-center mt-2">
            Read story <RightArrowIcon className="ml-2" />{" "}
          </NLink>
        </div>
      </div>

      <GatsbyImage
        image={featuredImage.node.localFile.childImageSharp.gatsbyImageData}
        className="border-[1px] border-red rounded h-[416px]"
      />
    </div>
  );
};

export { ArticlePreview };
