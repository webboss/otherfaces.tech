import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";

import Warning from "assets/images/svgs/warning.svg";

const Input = ({ label, placeholder, register, required, error }) => {
  const inputId = label ? label.replaceAll(" ", "-").toLowerCase() : "";

  const inputStyle = ctl(`
    ${baseStyles}
    ${error && inputErrorStyle}
`);

  return (
    <div className={inputWrapStyle}>
      {label && (
        <label htmlFor={inputId} className={labelStyle}>
          {label}
        </label>
      )}

      <input
        placeholder={placeholder}
        id={inputId}
        name={inputId}
        className={inputStyle}
        required={required}
        {...register}
      />

      {error && (
        <div className={errorMessageWrapStyle}>
          <Warning />
          <p className={errorMessageStyle}>{error}</p>
        </div>
      )}
    </div>
  );
};

const inputWrapStyle = ctl(`
  mb-4
`);
const baseStyles = `
  md:w-[420px]
  w-full
  rounded
  border
  border-primary-300
  py-[12px]
  outline-none
  pl-3
  text-[14px]
  bg-primary-200
  hover:bg-primary-200
  focus:border-secondary
`;

const inputErrorStyle = `
  border-action-error 
  bg-action-error-light
`;
const labelStyle = ctl(`
  text-[14px]
  text-primary-900
  mb-2
  block
  font-semibold
`);
const errorMessageWrapStyle = ctl(`
  flex 
  gap-2
  items-center
  mt-[10px]
`);
const errorMessageStyle = ctl(`
  text-[12px]
  text-action-error
  font-semibold
`);

Input.propTypes = {
  label: PropTypes.string,
  register: PropTypes.object,
  required: PropTypes.bool,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

export { Input };
