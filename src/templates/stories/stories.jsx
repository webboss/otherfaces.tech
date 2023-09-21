import { Text } from "components";
import { ArticlePreviewList } from "components/article";
import Container from "components/container";
import { Hr } from "components/hr";
import Layout from "components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { readingTime } from "reading-time-estimator";
import React from "react";

import Share from "./components/share";
import CopyButton from "./components/copy-button";
import { useEffect, useState } from "react";

const POSTS_URL = `${process.env.GATSBY_WORDPRESS_BASE_URL}/wp/v2/posts?_embed=1`;

const Story = ({ pageContext: { story } }) => {
  const { title, content, date, _embedded, role, excerpt } = story;

  const storyTitle = title?.rendered;
  const storyExcerpt = excerpt?.rendered;

  const author = _embedded["author"][0];
  const featuredImage = _embedded["wp:featuredmedia"][0]?.source_url;

  const readTime = readingTime(content?.rendered);

  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(POSTS_URL)
      .then(res => res.json())
      .then(data => {
        setStories(data);
      });
  }, []);

  const relatedStories = stories.filter(storyItem => storyItem.id !== story.id);

  return (
    <Layout title={storyTitle} description={storyExcerpt}>
      <Container className="md:py-[100px] py-[50px] ">
        <article>
          <header className="article-header">
            <MetaData date={date} readTime={readTime.minutes} />
            <Author author={author} />
            <Text variant="h3">
              {/* The weird symbol here is em-dash */}
              {storyTitle} &#8212; {role}
            </Text>
            <img
              src={featuredImage}
              alt={storyTitle}
              className="w-full object-top object-cover md:rounded-[100px] rounded-[50px] md:h-[1200px] h-[370px] my-[45px] bg-opacity-75 bg-black "
            />
          </header>

          <section className="flex md:flex-row flex-col-reverse justify-between relative">
            <aside>
              <div className="md:sticky md:mt-0 mt-8 top-4">
                <Text variant="p16" value="SHARE" />
                <Share title={storyTitle} />
                <CopyButton />
              </div>
            </aside>
            <content
              className="article max-w-[738px] flex-grow-0"
              dangerouslySetInnerHTML={{ __html: content?.rendered }}
            />
            <div></div>
          </section>
        </article>
      </Container>
      <Hr />

      <Container className="mb-[116px]">
        <ArticlePreviewList heading="More Stories" articles={relatedStories} />
      </Container>
    </Layout>
  );
};

const MetaData = ({ date, readTime = "4" }) => {
  const dateFromString = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(dateFromString);
  return (
    <div className="flex md:justify-start justify-between gap-10 mb-[22px]">
      <Text value={formattedDate} variant="p18" className=" uppercase " />
      <Text
        value={`${readTime} Mins Read`}
        variant="p18"
        className=" uppercase "
      />
    </div>
  );
};

const Author = ({ author }) => {
  const nameToShow = author?.name;

  return (
    <div className="mb-[22px] flex items-center">
      <StaticImage
        src="../../assets/images/avatar.png"
        className="md:mr-[19px] mr-[10px] md:w-[42px] w-[28px] md:h-[42px] h-[28px]"
      />

      <Text value={nameToShow} variant="p18" className=" uppercase !mb-0" />
    </div>
  );
};

export default Story;
