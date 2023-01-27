import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";

const Container = ({ className, children }) => {
  return (
    <section className={containerStyle + " " + className}>{children}</section>
  );
};

const containerStyle = ctl(`
  max-w-[1380px]
  mx-auto 
  md:px-[24px]
  px-6`);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
