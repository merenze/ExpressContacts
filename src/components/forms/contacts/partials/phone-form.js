// phone-form.js
import React from "react";
import { useState } from "react";

const validateIndex = (index) => {
  if (typeof index !== "number") throw "index must be a number";
};

/**
 * Update the phone number's type and write through to the ContactForm.
 * @param {object} event 
 * @param {number} index Updated component's index in the array.
 * @param {object} state State of the PhoneForm.
 * @param {function} setState SetState of the PhoneForm.
 * @param {function} updateParentArray Function to update the parent array with the new information.
 */
const updateType = (event, index, state, setState, updateParentArray) => {
  const value = {
    ...state,
    type: event.target.value
  };
  // Set the phone form's state
  setState(value);
  // Set the parent's state
  updateParentArray(index, value);
};

/**
 * Subcomponent for the phone number's type field.
 * @param {object} props 
 * @returns SelectTypeElement component.
 */
const SelectTypeElement = ({ index, state, setState, updateParentArray }) => {
  return (
    <select
      name="type"
      className="form-control"
      onChange={(event) => updateType(event, index, state, setState, updateParentArray)}
    >
      <option value="mobile">Mobile</option>
      <option value="home">Home</option>
      <option value="work">Work</option>
    </select>
  );
};

/**
 * Subcomponent for the phone number's number field.
 * @returns PhoneNumberElement component.
 */
const PhoneNumberElement = () => {
  // Note that this is a text field, not a number field.
  // There are too many valid phone formats for me to validate this.
  // TODO: Possibly add validation in the future.
  return <input name="number" type="text" className="form-control" />;
};

/**
 * Default export.
 * @param {object} props 
 * @returns PhoneForm subform for an ArrayElement.
 */
export default function PhoneForm({ index, updateParentArray }) {
  // TODO update this more efficiently. useReducer?
  validateIndex(index);
  
  const [state, setState] = useState({
    type: "mobile",
    number: "",
  });

  return (
    <div className="row">
      <div className="col-2">
        <SelectTypeElement
          index={index}
          state={state}
          setState={setState}
          updateParentArray={updateParentArray}
        />
      </div>
      <div className="col">
        <PhoneNumberElement />
      </div>
    </div>
  );
}
