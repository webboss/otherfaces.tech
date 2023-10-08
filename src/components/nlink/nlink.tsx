import React from "react";
import PropTypes from "prop-types";

import { Link } from "gatsby";

interface CustomProps {
  to?: string;
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
  href?: string | { url: string };
}

type NLinkProps = CustomProps &
  Omit<React.ComponentPropsWithoutRef<"a">, "href">;
const NLink = ({
  href,
  to,
  className,
  activeClassName,
  children,
}: NLinkProps) => {
  let NLinkElement;
  let nlinkProps: Omit<NLinkProps, "children"> = {};

  if (to) {
    NLinkElement = Link;
    nlinkProps.to = to;
    nlinkProps.activeClassName = activeClassName;
  }

  if (href) {
    NLinkElement = "a";
    if (typeof href === "string") {
      nlinkProps.href = href;
    }
    // to open the link on a new tab, make href an object with the property "url"
    if (typeof href === "object" && href) {
      nlinkProps.href = href?.url;
      nlinkProps.target = "_blank";
      nlinkProps.rel = "noreferrer";
    }
  }

  return (
    <NLinkElement className={className} {...nlinkProps}>
      {children}
    </NLinkElement>
  );
};

NLink.propTypes = {
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  to: PropTypes.string,
  activeClassName: PropTypes.string,
};

export { NLink };
