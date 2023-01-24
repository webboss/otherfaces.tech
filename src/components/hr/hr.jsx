import PropTypes from "prop-types";
import React from "react";

export const Hr = ({ variant = "blue-to-red", className }) => {
  return (
    <hr
      className={` h-[2px] border-0 bg-gradient-to-r from-[#1657C7]
    to-[#F1221A] ${className}`}
    />
  );
};

const variants = {
  "blue-to-red": "gradient-blue-to-red",
  "yellow-to-blue": "gradient-yellow-to-blue",
};

Hr.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)),
};

Hr.defaultProps = {
  variant: "blue-to-red",
};
