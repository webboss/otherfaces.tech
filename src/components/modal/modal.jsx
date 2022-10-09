import React from "react";
import PropTypes from "prop-types";

import ctl from "@netlify/classnames-template-literals";

const Modal = ({ isOpen, children }) => {
  return isOpen ? (
    <div role="dialog" className={baseStyle}>
      <div className={containerStyle}>
        <div className={contentStyle}>{children}</div>
      </div>
    </div>
  ) : null;
};

const baseStyle = ctl(`
w-full
h-screen
bg-black/30
backdrop-blur-md
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
h-[600px]
modal
flex
items-center
justify-center
sm:rounded-[140px]
rounded-[70px]
`);

const contentStyle = ctl(`
w-[calc(100%-20px)]
h-[calc(100%-20px)]
bg-black
sm:rounded-[130px]
rounded-[60px]
flex
items-center
justify-center
`);

export { Modal };
