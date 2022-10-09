import React from "react";
import PropTypes from "prop-types";

import ctl from "@netlify/classnames-template-literals";

const Modal = ({ children }) => {
  return (
    <div role="dialog" className={baseStyle}>
      <div className={containerStyle}>
        <div className={contentStyle}>{children}</div>
      </div>
    </div>
  );
};

const baseStyle = ctl(`
w-full
h-screen
bg-black
fixed
left-0
right-0
bottom-0
top-0
z-10
px-[16px]
flex
items-center
justify-center

`);

const containerStyle = ctl(`
w-full
max-w-[800px]
bg-white
h-[600px]
modal
flex
items-center
justify-center
rounded-[140px]
`);

const contentStyle = ctl(`
w-[calc(100%-20px)]
h-[calc(100%-20px)]
bg-black
rounded-[130px]
flex
items-center
justify-center
`);

export { Modal };
