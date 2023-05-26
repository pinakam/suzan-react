import React from "react";

const FormValidation = (category) => {
  // display messages in error
  const errors = {};

  if (category.Name.trim() === "") {
    errors.Name = "Name is required";
  }
  if (category.Email.trim() === "") {
    errors.Email = "email is required";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(category.Email)) {
      errors.Email = "Please enter a valid email address";
      console.log(errors.Email, "is not valid");
    }
  }

  return errors;
};

export default FormValidation;
