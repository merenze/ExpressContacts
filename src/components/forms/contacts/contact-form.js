import React from "react";

import AddressForm from "./partials/address-form";
import ArrayElement from "../elements/array-element";
import PhoneForm from "./partials/phone-form";
import SubmitElement from "../elements/submit-element";
import TextElement from "../elements/text-element";

const id = 'contact-form';

const submitForm = (event) => {
  event.preventDefault();
  console.log("Form submitted.");
};

export default function ContactForm() {
  return (
    <form id={id}>
      <TextElement name="first-name" label="First Name" />
      <TextElement name="middle-name" label="Middle Name" />
      <TextElement name="last-name" label="Last Name" />
      <TextElement name="email" label="Email" />
      <br />  
      <div className="row">
        <ArrayElement label="Phone" componentType={PhoneForm} />
      </div>
      <div className="row">
        <ArrayElement label="Address" componentType={AddressForm} />
      </div>
      <br />
      <SubmitElement cancel="/contacts"/>
    </form>
  );
}
