import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import fireDb from "../../helper/firebase";
import { useNavigate, useParams } from "react-router-dom";
import FormValidation from "../../utils/FormValidation";
const AddEdit = ({editMode}) => {
  const initialState = {
    name: "",
    email: "",
    contact: "",
  };
  const [state, setState] = useState(initialState);
  const [validation, setValidation] = useState({});

  const { name, email, contact } = state;

const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
   
  };
  const { id } = useParams();
  useEffect(() => {
   if(editMode){
    const fetchData = async () =>{
      try{
        const databaseVal = await fireDb.database().ref(id).once("value");
        const dataVal = databaseVal.val();
        if (dataVal){
          setState(dataVal);
        }
      }
      catch (error){
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
   }
 
  }, [editMode, id]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
   
      const errors = FormValidation(state)
      if(Object.keys(errors).length >0 ){
        setValidation(errors)
      }
    
     else {
      // to run editmode. edit functions
      if(editMode){
        fireDb
        .database()
        .ref(`/${id}`)
        .update({
          name: name,
          email: email,
          contact: contact,
        })
        .then(() => {
          // Reset the form state
          console.log(state);
          setState(initialState);
          navigate("/");
          alert("Data updated successfully!");
        })
        .catch((error) => {
          console.log("Error updating data: " + error.message);
        });
      }
      // to run add functionality
      else{
        fireDb
        .database()
        .ref()
        .push({
          name: name,
          email: email,
          contact: contact,
        })
        .then(() => {
          // Reset the form state
          console.log(state);
          setState(initialState);
          navigate("/")
          alert("Data added successfully!");
        })
        .catch((error) => {
          console.log("Error adding data: " + error.message);
        });
      }
     
    }
  };

  return (
    <>
      <Container className="mt-5">
        <h1 className="mt-5 mb-4">{editMode ? "Edit" : "Add"} Details</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 w-25" controlId="formGroupname">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
            {validation.name && (
              <div className="text-danger">{validation.name}</div>
            )}
    
          </Form.Group>
          <Form.Group className="mb-3 w-25" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
             {validation.email && (
              <div className="text-danger">{validation.email}</div>
            )}
             
          </Form.Group>
          <Form.Group className="mb-3 w-25" controlId="formGroupcontact">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your contact No"
              name="contact"
              maxLength={10}
              value={contact}
              onChange={handleChange}
            />
             {validation.contact && (
              <div className="text-danger">{validation.contact}</div>
            )}
         
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </>
  );
};

export default AddEdit;
