import React, { useState } from "react";
import ctl from "@netlify/classnames-template-literals";
import { Menu } from "./menu";
import { NLink } from "components/nlink";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "components/button";
import MenuIcon from "svgs/menu.svg";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onToggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className={`${mainHeaderStlye} ${openMenu && "h-full"}`}>
      <nav className={navStyle}>
        <div className="w-[33%]">
          <Hamburger onToggle={onToggle} />
        </div>
        <div className="w-[33%] text-center  flex justify-center">
          <NLink to="/" className={logoStyle}>
            <StaticImage
              alt="Otherfaces of Tech"
              src="../../../assets/images/otherfaces.tech.png"
              width={160}
              className="md:w-auto w-[120px]"
            />
          </NLink>
        </div>

        <div className="w-[33%] flex justify-end ">
          <div className={buttonsWrapperStyle}>
            <Button
              variant="alternative"
              text="Get merch"
              href={{ url: "https://paystack.shop/other-faces-of-tech" }}
            />
            <Button text="Donate" to="/donate" />
          </div>
        </div>
      </nav>
      {openMenu && <Menu onToggle={onToggle} />}
    </header>
  );
};

const Hamburger = ({ onToggle }) => {
  return (
    <button className={hamburgerButton} onClick={onToggle}>
      <MenuIcon className="md:w-auto w-[27px]" />
    </button>
  );
};
const hamburgerButton = ctl(`
w-[42px]
inline-block
cursor-pointer
`);

const buttonsWrapperStyle = ctl(`
lg:flex
hidden
items-center
gap-[11px]

`);
const logoStyle = ctl(`
inline-block
mx-auto
md:max-w-[175px]
max-w-[120px]
shrink-0
`);
// fixed
const mainHeaderStlye = ctl(`
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
  my-[24px]
  px-[24px]
  lg:py-0
  max-w-[1400px]
  mx-auto

`);

export { NavBar };
