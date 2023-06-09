import React from "react";

const FormValidation = (state) => {
  // display messages in error
  const errors = {};

  if (state.name.trim() === "") {
    errors.name = "Name is required";
  }
  if (state.contact.trim() === "") {
    errors.contact = "contact no is required";
  }
  if (state.email.trim() === "") {
    errors.email = "email is required";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(state.email)) {
      errors.email = "Please enter a valid email address";
      console.log(errors.email, "is not valid");
    }
  }

  return errors;
};

export default FormValidation;
