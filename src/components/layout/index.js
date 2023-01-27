/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import Seo from "./seo";
import { MainFooter } from "components/layout/footer";
import { NavBar } from "./navbar";
import ctl from "@netlify/classnames-template-literals";

const Layout = ({ children, title, ignoreSiteName = false }) => {
  return (
    <>
      <Seo title={title} ignoreSiteName={ignoreSiteName} />
      <NavBar />
      <main className="relative">{children}</main>
      <MainFooter />

      <div
        className={`radial-gradient-blue  top-[50%] right-0 ${gradientItemStyle}`}
      />
      <div
        className={`radial-gradient-red  top-[20%] left-0 ${gradientItemStyle}`}
      />
    </>
  );
};

const gradientItemStyle = ctl(`
w-[500px] h-[500px] rounded-full opacity-20 fixed z-[-1] pointer-events-none
`);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Layout;
