import React from "react";
import PropTypes from "prop-types";

import { Link } from "gatsby";

const NLink = ({ href, to, className, children }) => {
  let NLinkElement;
  let nlinkProps = {};

  if (to) {
    NLinkElement = Link;
    nlinkProps.to = to;
  }

  if (href) {
    NLinkElement = "a";
    if (typeof href === "string") {
      nlinkProps.href = href;
    }
    // to open the link on a new tab, make href an object with the property "url"
    if (typeof href === "object") {
      nlinkProps.href = href.url;
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
};

export { NLink };
