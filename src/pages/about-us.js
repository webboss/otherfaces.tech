import React, { useState } from "react";

import Layout from "components/layout";
import { Newsletter, Partners } from "components";

import ArrowIcon from "assets/images/svgs/arrow.svg";
import { AboutUsHeader, Team } from "templates/about-us";

const AboutPage = () => {
  return (
    <Layout title="About us">
      <>
        <AboutUsHeader />
        <div className="h-[300px] mb-20 overflow-hidden relative ">
          <ArrowIcon className="absolute left-[-100px]" />
          <ArrowIcon className=" transform rotate-180 absolute right-[-100px] bottom-0" />
        </div>

        <Team />
        <Newsletter />

        <div className="md:my-[122px] my-[90px]">
          <Partners />
        </div>
      </>
    </Layout>
  );
};

export default AboutPage;
