import React from "react";
import { createRoot } from "react-dom/client";
import ContactForm from "../../components/forms/contacts/contact-form";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const root = createRoot(document.getElementById('contact-form'));

root.render(
    <ContactForm />
);