import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {/* La linea de abajo significa: Si error is truthy se rendizara el div, caso es falsy ingora el div */}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
