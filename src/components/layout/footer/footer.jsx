import ctl from "@netlify/classnames-template-literals";
import Container from "components/container";
import React from "react";
import { Addresses } from "./addresses";
import { Copyright } from "./copyright";
import { FooterNavigation } from "./navigation";
import { Policies } from "./policies";

const MainFooter = () => {
  return (
    <>
      <footer className={footerStyle}>
        <Container>
          <FooterNavigation />
          <Policies />
          <div className={addressAndCopyrightWrapperStyle}>
            <Addresses />
            <Copyright />
          </div>
        </Container>
      </footer>
    </>
  );
};

const footerStyle = ctl(`
pt-16
md:pb-16
pb-6
bg-primary-200
`);

const addressAndCopyrightWrapperStyle = ctl(`
md:flex
justify-between
pt-6
mt-7
border-t
border-primary-500
`);

export { MainFooter };
