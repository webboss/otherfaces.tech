import ctl from "@netlify/classnames-template-literals";
import Container from "components/container";
import { NLink } from "components/nlink";
import { Text } from "components/text";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import menulinks from "config/menu/header.json";

const MainFooter = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className={footerStyle}>
      <Container>
        <NLink to="/">
          <StaticImage
            alt="Otherfaces of Tech"
            src="../../../assets/images/otherfaces.tech.png"
            width={160}
          />
        </NLink>

        <nav className="mt-[67px]">
          <ul className="flex justify-center flex-wrap">
            {menulinks.map(menulink => {
              const { to, href, title } = menulink;
              return (
                <Text
                  variant="p16"
                  as="li"
                  key={to || href}
                  className="mx-[28px] md:my-0 my-[7px]"
                >
                  <NLink {...menulink}>{title}</NLink>
                </Text>
              );
            })}
          </ul>
        </nav>

        <Text variant="p18" className="mt-[48px]">
          &copy; {currentYear} All rights Reserved. Other Faces of Tech
        </Text>
      </Container>
    </footer>
  );
};

const footerStyle = ctl(`
bg-primary-200
bg-opacity-5
pt-[74px]
pb-[83px]
text-center
rounded-t-[250px]
`);

export { MainFooter };
