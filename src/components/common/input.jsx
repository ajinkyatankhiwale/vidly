import React from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group col-md-6 padding-left-0">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
