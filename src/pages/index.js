import React, { useState } from "react";

import Layout from "components/layout";
import { Newsletter, Partners, Roadmaps } from "components";

import { HomeFeaturedStories, HomeHeader } from "templates/home";

const IndexPage = () => {
  return (
    <Layout title="Other Faces of Tech" ignoreSiteName={true}>
      <>
        <HomeHeader />

        <HomeFeaturedStories />
        <Newsletter />

        <div className="pt-[90px]">
          <Roadmaps />
        </div>
        <div className="md:mt-[122px] mt-[59px] mb-[90px]">
          <Partners />
        </div>
      </>
    </Layout>
  );
};

export default IndexPage;
