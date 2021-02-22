import React from "react";

function getWidth(size) {
  return 100 / size;
}

function getClassName(size) {
  const width = parseInt(getWidth(size));
  return "field-" + width;
}

function rSize(value, max) {
  return (1 * max) / value;
}

export default function FormField(props) {
  const size = rSize(props.sizeValue, props.sizeMax);

  const fieldPaddingClassName = props.fieldPaddingClassName
    ? props.fieldPaddingClassName
    : "";

  return (
    <div className={`field ${getClassName(size)}`}>
      <div className={`field-padding ${fieldPaddingClassName}`}>
        {props.children}
      </div>
    </div>
  );
}
