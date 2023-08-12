// contact-form.js 
import React from "react";
import { useRef, useState } from "react";

import AddressForm from "./partials/address-form";
import ArrayElement from "../elements/array-element";
import PhoneForm from "./partials/phone-form";
import SubmitElement from "../elements/submit-element";
import TextElement from "../elements/text-element";

const id = "contact-form";

/**
 * Get a function to call on form submission.
 * @param {object} form Reference to the form.
 * @param {object} state State of the ContactForm component.
 * @returns A submission handler.
 */
const getSubmitForm = (form, state) => (event) => {
  event.preventDefault();
  const data = new FormData(form.current);
  
  console.log({
    ...Object.fromEntries(data),
    ...state,
  });
};

/**
 * 
 * @param {object} state State of the ContactForm component.
 * @param {function} setState SetState of the ContactForm component.
 * @returns A function to set the form's phone array to the passed array.
 */
const getSetPhones = (state, setState) => (phones) => {
  setState(prevState => ({
    ...prevState,
    phones: phones,
  }));
};

export default function ContactForm() {
  const [state, setState] = useState({
    // TODO find out why this has only one element when submitting
    phones: [],
    addresses: []
  });
  const ref = useRef(null);

  return (
    <form ref={ref} id={id} onSubmit={(event) => submitForm(event, state)}>
      <TextElement name="first-name" label="First Name" />
      <TextElement name="middle-name" label="Middle Name" />
      <TextElement name="last-name" label="Last Name" />
      <TextElement name="email" label="Email" />
      <br />
      <div className="row">
        <ArrayElement
          label="Phone"
          componentType={PhoneForm}
          updateParent={getSetPhones(state, setState)}
        />
      </div>
      <div className="row">
        <ArrayElement label="Address" componentType={AddressForm} />
      </div>
      <br />
      <SubmitElement
        handler={getSubmitForm(ref, state)}
        cancelRoute="/contacts"
      />
    </form>
  );
}
