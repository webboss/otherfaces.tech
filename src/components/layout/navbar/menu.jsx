import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { NLink } from "components/nlink";
import { StaticImage } from "gatsby-plugin-image";
import CloseIcon from "svgs/close.svg";
import Container from "components/container";
import { Text } from "components/text";
import menulist from "config/menu/header.json";

const Menu = ({ onToggle }) => {
  return (
    <div className={navWrapperStyle}>
      <Container>
        <header className={headerStyle}>
          <button className={closeButtonStyle} onClick={onToggle}>
            <CloseIcon width={32} />
          </button>

          <NLink to="/">
            <StaticImage
              alt="Otherfaces of Tech"
              src="../../../assets/images/otherfaces.tech.png"
              width={160}
            />
          </NLink>
          <div></div>
        </header>
        <nav>
          <ul className={listWrapper}>
            {menulist.map(menuItem => {
              const { title, url, href } = menuItem;
              return (
                <Text
                  variant="h3"
                  as="li"
                  color="primary-100"
                  className="mb-[36px]"
                >
                  <NLink
                    {...menuItem}
                    key={url || href}
                    activeClassName={activePageLink}
                  >
                    {title}
                  </NLink>
                </Text>
              );
            })}
          </ul>
        </nav>
      </Container>
    </div>
  );
};

const closeButtonStyle = ctl(`
p-0
m-0
`);

const navWrapperStyle = ctl(`
w-full
h-full
bg-black
fixed
left-0
right-0
top-0
`);

const listWrapper = ctl(`
text-right
lg:pr-[80px]
`);

const activePageLink = ctl(`
bg-gradient-to-r
from-[#1657C7]
to-[#F1221A]
bg-clip-text
text-transparent
`);

const headerStyle = ctl(`
flex
justify-between
items-center
py-[24px]
`);

export { Menu };
