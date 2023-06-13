import React, { useState } from "react";

import Layout from "components/layout";
import { Newsletter, Partners } from "components";

import ArrowIcon from "assets/images/svgs/arrow.svg";
import { AboutUsHeader, Team } from "templates/about-us";
import ctl from "@netlify/classnames-template-literals";

const AboutPage = () => {
  return (
    <Layout title="About us">
      <>
        <AboutUsHeader />
        <div className={arrowsContainerStyle}>
          <ArrowIcon className={arrowLeftStyle} />
          <ArrowIcon className={arrowRightStyle} />
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

const arrowsContainerStyle = ctl(`
md:h-[300px] 
h-[200px] 
md:mt-0
mt-[-100px]
mb-20 
overflow-hidden 
relative 
`);

const arrowLeftStyle = ctl(`
absolute 
left-[-100px] 
md:bottom-[180px]
bottom-[100px] 
md:w-auto 
w-[200px]
`);

const arrowRightStyle = ctl(`transform 
rotate-180 
absolute 
right-[-100px] 
md:w-auto 
w-[200px] 
md:bottom-0 
bottom-[50px]

`);
export default AboutPage;
