import React from "react";

const InputField = ({ label, name, placeholder, type, onChange }) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
