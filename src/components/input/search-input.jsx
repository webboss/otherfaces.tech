import ctl from "@netlify/classnames-template-literals";
import React from "react";

import { Input } from "./input";
import SearchIcon from "assets/images/svgs/search.svg";

const SearchInput = ({ placeholder, value, onChange = () => {} }) => {
  return (
    <div className={wrapperStyle}>
      <SearchIcon />
      <Input
        placeholder={placeholder}
        className={inputStyle}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const wrapperStyle = ctl(`
    flex
    items-center
    !border-2
    rounded-full
    px-14
`);

const inputStyle = ctl(`
    placeholder:text-[#4B4B4B]
    border-none
    mb-0
    pb-0
    rounded-none
`);

export { SearchInput };
