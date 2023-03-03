import React from "react";

const validateName = (name) => {
  if (name === "") return;
  if (typeof name !== "string") throw "Name must be a string.";
};

const validateLabel = (label) => {
  if (label === "") return;
  if (typeof label !== "string") throw "Label must be a string.";
};

const getLabelElement = (name, label) => {
  if (label === "") return "";
  return (
    <label for={name} id={`label-${name}`}>
      {label}
    </label>
  );
};

/**
 * React component.
 */
export default function TextElement({ name = "", label = "", useId = true }) {
  validateName(name);
  validateLabel(label);

  return (
    <div
      id={name === "" ? undefined : `form-group-${name}`}
      className="form-group"
    >
      {getLabelElement(name, label)}
      <input
        type="text"
        name={name === "" ? undefined : name}
        id={name === "" ? undefined : name}
        className={`form-control`}
      />
    </div>
  );
}
