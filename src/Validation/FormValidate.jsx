import React from 'react'

const FormValidate = (data) => {
    // display message in errors
    const errors = {}
    if (data.name.trim() === ""){
        errors.name = "Name is required";
    }
    if(data.email.trim()=== ""){
        errors.email = "Email is required";
    }else{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(data.email)){
            errors.email = "Please enter a valid email address";
        }
    }
    if(data.gender.trim() === ""){
        errors.gender = "Gender is required";
    }
    if(data.contact.trim() === ""){
        errors.contact = "Contact is required";
    }
    if(data.department.trim() === ""){
        errors.department = "Please Select a department";
    }
    if(data.salary.trim() === ""){
        errors.salary = "Please Enter Salary";
    }
    if(data.date.trim() === ""){
        errors.date = "Please Enter Join Date";
    }
  return errors;
   
};

export default FormValidate