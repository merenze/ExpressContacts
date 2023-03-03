import React from "react";
import { useState } from "react";

const SelectTypeElement = ({ id }) => {
  return (
    <select className='form-control' id={`${id}-type`}>
      <option value="mobile">Mobile</option>
      <option value="cell">Home</option>
      <option value="Work">Work</option>
    </select>
  );
};

const PhoneNumberElement = ({ id }) => {
  // Note that this is a text field, not a number field.
  // There are too many valid phone formats for me to validate this.
  // TODO: Possibly will add validation in the future.
  return <input type="text" id={`${id}-number`} className="form-control" />;
};

export default function PhoneForm({ index }) {
  const [state, setState] = useState({ index: index });
  const id = `form-phone-${state.index}`;

  return (
    <React.Fragment>
      <div class="row">
        <div className="col-2">
          <SelectTypeElement id={id} />
        </div>
        <div className="col">
          <PhoneNumberElement id={id} />
        </div>
      </div>
    </React.Fragment>
  );
}
