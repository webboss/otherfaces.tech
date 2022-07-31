import React from "react";
import PropTypes from "prop-types";
import Container from "../container";
import MainMenu from "../layout/menu";
import ctl from "@netlify/classnames-template-literals";
import { Text } from "components/text";

const PageHeader = ({ title = "", subheading = "" }) => {
  // You can customize this further, add new props, set conditions and so on and so forth. The sky is truly your limit

  const headerStyle = ctl(`
  bg-black 
  pt-80 
  text-white 
  pb-10`);

  return (
    <header className={headerStyle}>
      <Container>
        <>
          <MainMenu />
          <Text
            variant="h1"
            value={title}
            color="primary-100"
            className="mb-5"
          />

          <Text variant="p18" value={subheading} color="primary-100" />
        </>
      </Container>
    </header>
  );
};

PageHeader.propTypes = {
  title: PropTypes.any.isRequired,
  subheading: PropTypes.any,
};

export default PageHeader;
