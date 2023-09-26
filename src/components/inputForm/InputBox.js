import React from "react";

function InputBox(props) {
  return (
    <p>
      <label htmlFor={props.inputId}>{props.label}</label>
      <input
        onChange={props.change}
        name={props.inputId}
        value={props.value}
        type="number"
        id={props.inputId}
      />
    </p>
  );
}

export default InputBox;
