import React from "react";
import PropTypes from "prop-types";

import ctl from "@netlify/classnames-template-literals";

import Loader from "src/assets/images/svgs/loader.svg";
import { NLink } from "../nlink";

const Button = ({
  text,
  variant: buttonVariant = "primary",
  size: buttonSize = "xsmall",
  isLoading,
  onClick,
  disabled: buttonDisabled,
  href,
  to,
  children,
}) => {
  const buttonStyle = ctl(`
  ${baseStyle}
  ${sizes[buttonSize]}
  min-w-[100%]
  ${variants[buttonVariant]}
  ${buttonDisabled && `opacity-25`}
  `);

  let ButtonElement = "button";
  let linkProps = {};

  if (href || to) {
    ButtonElement = NLink;
    if (to) {
      linkProps.to = to;
    }

    if (href) {
      linkProps.href = href;
    }
  }

  return (
    <ButtonElement
      className={buttonStyle}
      onClick={onClick}
      disabled={buttonDisabled || isLoading}
      {...linkProps}
    >
      <span className={textStyle}>{text || children}</span>
      {isLoading && <Loader />}
    </ButtonElement>
  );
};

const textStyle = ctl(`
  block
`);

const baseStyle = ctl(`
rounded
text-primary
text-center
font-semibold
transition
duration-400
inline-flex
items-center
justify-center
disabled:cursor-not-allowed
`);

const sizes = {
  xsmall: `
  md:min-w-[166px]
  h-[45px]
  `,
  small: `
  md:min-w-[200px]
  h-[58px]
  `,
  medium: `
  md:min-w-[275px]
  h-[58px]
  `,
  large: `
  md:min-w-[375px]
  h-[58px]
  `,
  xlarge: `
  md:min-w-[420px]
  h-[58px]
  `,
};

const variants = {
  primary: `
bg-secondary
hover:bg-secondary/80
disabled:bg-secondary
`,
  alternative: `
bg-primary-400
hover:bg-primary
hover:text-primary-100
disabled:bg-primary-400
disabled:text-primary
`,
};

Button.defaultProps = {
  variant: "primary",
  size: "xsmall",
};
Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "alternative"]),
  size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge"]),
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  to: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export { Button };
