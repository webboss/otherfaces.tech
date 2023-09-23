import React, { useEffect, useState } from "react";

import { Button, Text } from "components";
import { Hr } from "components/hr";
import Container from "components/container";

import { ArticlePreviewList } from "components/article";

const POSTS_URL = `${process.env.GATSBY_WORDPRESS_BASE_URL}/wp/v2/posts?_embed=1`;
export const HomeFeaturedStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    try {
      fetch(POSTS_URL)
        .then(res => res.json())
        .then(data => {
          setStories(data);
        });
    } catch (e) {
      // We need to setup a bug reporting platform
      console.error("[fetch-posts]", e.message);
    }
  }, []);

  const recentStories = stories.slice(0, 4);
  const firstItem = recentStories[0];
  const firstItemEmbeds = firstItem?._embedded;

  const remainingItems = recentStories.slice(1);

  const firstItemFeaturedImage = firstItemEmbeds
    ? firstItemEmbeds["wp:featuredmedia"][0]?.source_url
    : "";

  const hasStories = stories.length > 0;
  if (!hasStories) {
    return <div id="recent-stories" />;
  }
  return (
    <div className="pt-[120px] pb-[160px]  relative" id="recent-stories">
      <Hr className="absolute xl:top-[200px] top-[152px] md:block hidden left-0 w-full " />
      <Container>
        <section className="grid grid-cols-12 gap-3 md:text-left text-center">
          <div className="gradient-blue-to-red p-[1px] md:col-span-5  rounded col-span-12 ">
            <div className=" overflow-hidden relative">
              <div className="absolute bg-gradient-to-t rounded filter mix-blend-multiply from-black to-white  z-10 opacity-80   left-0 right-0 top-0 w-full h-full" />
              <img
                src={firstItemFeaturedImage}
                className="rounded md:h-[516px] h-[356px] w-full object-cover"
                alt={firstItem?.title?.rendered}
              />
            </div>
          </div>
          <div></div>
          <div className="md:col-span-5 col-span-12 flex flex-col justify-center">
            <div>
              <Text variant="h2">{firstItem?.title?.rendered}</Text>
              <Text
                variant="p18"
                value={firstItem?.role}
                className=" mt-1 mb-4 "
              />

              <Button
                href={`/story/${firstItem?.slug}`}
                variant="alternative"
                size="large"
                text="Read Story"
              />
            </div>
          </div>
        </section>

        <ArticlePreviewList articles={remainingItems} />
      </Container>
    </div>
  );
};
