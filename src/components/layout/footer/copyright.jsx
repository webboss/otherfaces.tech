import React from "react";
import { Text } from "components";
import ctl from "@netlify/classnames-template-literals";

const Copyright = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Text variant="p14" className={copyrightStyle}>
      &copy; {year} FourthCanvas, all rights reserved{" "}
    </Text>
  );
};

const copyrightStyle = ctl(`
md:mt-0
mt-16
`);
export { Copyright };
