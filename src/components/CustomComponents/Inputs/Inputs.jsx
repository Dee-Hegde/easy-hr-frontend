import React from "react";
import "./inputs.scss";

const Inputs = (props) => {
  const {
    type = "text",
    label = "",
    name = "",
    isLableRequired = true,
    isErrorMessageRequired = true,
    errorMessage = "",
    placeholder = "input",
    value,
    onChange,
    className,
    inputClassName,
    labelClassName,
    errorClassName,
    ...otherProps
  } = props;
  return (
    <div className={`i-wrapper ${className}`}>
      {isLableRequired && (
        <label className={`i-label ${labelClassName}`}>{label}</label>
      )}
      <input
        className={`i-input ${inputClassName}`}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        {...otherProps}
      />
      {isErrorMessageRequired && (
        <span className={`i-error ${errorClassName}`}>{errorMessage}</span>
      )}
    </div>
  );
};

export default Inputs;
