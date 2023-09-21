import React from "react";
import { NLink, Text } from "components";

import RightArrowIcon from "assets/images/svgs/arrow-right.svg";

const ArticlePreview = ({ article }) => {
  const articleEmbed = article["_embedded"];
  const featuredImage = articleEmbed
    ? articleEmbed["wp:featuredmedia"][0]?.source_url
    : "";

  return (
    <div className="gradient-blue-to-red p-[1px] rounded">
      <div className="relative overflow-hidden  rounded ">
        <div className="absolute z-10 left-0 right-0 top-0 w-full h-full flex flex-col justify-end">
          <div className="bg-gradient-to-t from-black via-black to-transparent pl-[29px]   pr-4 pb-[39px] pt-[120px]">
            <Text variant="h5" value={article?.title?.rendered} isPrimary />
            <Text variant="p16" value={article?.role} />
            <NLink
              to={`/story/${article?.slug}`}
              className="flex items-center mt-2 group"
            >
              Read story{" "}
              <RightArrowIcon className=" transition transform ml-2 group-hover:translate-x-2" />{" "}
            </NLink>
          </div>
        </div>

        <img
          src={featuredImage}
          className=" rounded  h-[416px] w-full object-cover"
          alt={article?.title?.rendered}
        />
      </div>
    </div>
  );
};

export { ArticlePreview };
