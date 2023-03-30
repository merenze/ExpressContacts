import React from "React";

/**
 * Subcomponent to submit the form.
 * @param {*} props 
 * @returns SubmitButton component.
 */
const SubmitButton = ({ handler }) => {
  return (
    <div className="col">
      <button
        id="input-submit"
        type="button"
        className="btn btn-primary form-control"
        onClick={handler}
      >
        Submit
      </button>
    </div>
  );
};

/**
 * Subcomponent to cancel the form.
 * @param {*} props 
 * @returns CancelButton component.
 */
const CancelButton = ({ route }) => {
  if (typeof route == "undefined") {
    return "";
  }
  if (typeof route !== "string") {
    throw "Cancel route must be a string"
  }

  return (
    <div className="col">
      <a
        id="input-cancel"
        className="btn btn-danger form-control"
        href={route}
      >
        Cancel
      </a>
    </div>
  );
};

/**
 * Default export.
 * @param {*} param0 
 * @returns SubmitElement
 */
export default function SubmitElement({ handler, cancelRoute }) {

  return (
    <div className="row form-group" id="form-group-submit">
          <SubmitButton handler={handler} />
          <CancelButton route={cancelRoute} />
    </div>
  );
}
