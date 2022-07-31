import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";

const Container = ({ children }) => {
  return <section className={containerStyle}>{children}</section>;
};

const containerStyle = ctl(`
  max-w-screen-lg  
  mx-auto 
  md:px-0 
  px-6`);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
