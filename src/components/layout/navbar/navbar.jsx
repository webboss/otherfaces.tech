import React, { useState } from "react";
import ctl from "@netlify/classnames-template-literals";
import { Menu } from "./menu";
import { NLink } from "components/nlink";
import { StaticImage } from "gatsby-plugin-image";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onToggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className={`${mainHeaderStlye} ${openMenu && "h-full"}`}>
      <nav className={navStyle}>
        <NLink to="/" className={logoStyle}>
          <StaticImage
            alt="Otherfaces of Tech"
            src="../../../assets/images/otherfaces.tech.png"
            width={175}
          />
        </NLink>

        {/* <Menu openMenu={openMenu} onToggle={onToggle} /> */}
      </nav>
    </header>
  );
};

const logoStyle = ctl(`
inline-block
mx-auto
my-[87px]
`);
// fixed
const mainHeaderStlye = ctl(`
bg-black
top-0
left-0
w-full
z-[9999]
lg:h-auto
`);

const navStyle = ctl(`
  flex
  items-center
  justify-between
  lg:justify-start
  px-[25px]
  py-[12.5px]
  lg:py-0
  max-w-[1386px]
  mx-auto
`);

export { NavBar };
