import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";

const Br = ({ on }) => {
  const brStyle = ctl(`${variants[on]}`);

  return <br className={brStyle} />;
};

const variants = {
  desktop: `
  md:block
  hidden
  `,
  all: `
  block
  `,
  mobile: `
  block
  md:hidden
  `,
};
const validVariants = ["all", "desktop", "mobile"];

Br.propTypes = {
  on: PropTypes.oneOf([...validVariants]),
};

export { Br };
