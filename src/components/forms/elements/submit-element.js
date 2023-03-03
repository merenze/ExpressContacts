import React from "React";

const cancelForm = (event) => {
  console.log("Form cancelled.");
  // TODO
};

const SubmitButton = ({formId}) => {
  return (
    <div class="col">
      <button
        id="input-submit"
        type="button"
        class="btn btn-primary form-control"
      >
        Submit
      </button>
    </div>
  );
};

const CancelButton = ({ cancel }) => {
  if (typeof cancel == "undefined") return "";
  if (typeof cancel == "string")
    cancel = {
      name: "Cancel",
      route: "cancel",
    };
  return (
    <div class="col">
      <a
        id="input-cancel"
        className="btn btn-danger form-control"
        href={cancel.route}
      >
        {cancel.name}
      </a>
    </div>
  );
};

export default function SubmitElement({ name = "Submit", formId, cancel }) {
  if (typeof cancel === "string") {
    cancel = {
      name: "Cancel",
      route: cancel,
    };
  }

  return (
    <div className="row form-group" id="form-group-submit">
          <SubmitButton formId={formId} />
          <CancelButton cancel={cancel} />
    </div>
  );
}
