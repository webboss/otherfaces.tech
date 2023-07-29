import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";

import Warning from "assets/images/svgs/warning.svg";

const Input = ({
  label,
  placeholder,
  register,
  required,
  error,
  className,
  type,
  children,
}) => {
  const inputId = label ? label.replaceAll(" ", "-").toLowerCase() : "";

  const IS_SELECT_INPUT_TYPE = type?.toLowerCase().trim() === "select";
  const InputElement = IS_SELECT_INPUT_TYPE ? "select" : "input";
  const inputStyle = ctl(`
    ${baseStyles}
    ${error && inputErrorStyle}
    ${className}
`);

  return (
    <div className={inputWrapStyle}>
      {label && (
        <label htmlFor={inputId} className={labelStyle}>
          {label}
        </label>
      )}

      <InputElement
        placeholder={placeholder}
        id={inputId}
        name={inputId}
        className={inputStyle}
        required={required}
        {...register}
        type={type}
      >
        {children}
      </InputElement>

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
  w-full
`);

const baseStyles = `
  w-full
  rounded-full
  border-2
  border-primary-300
  py-[14px]
  outline-none
  pl-6
  text-[14px]
  bg-transparent
`;

const inputErrorStyle = `
  border-action-error 
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
