import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormValidation from "../utils/FormValidation";

function Modals(props) {
  const initialCategory = {
    Name: "",
    Email: "",
   
  };
  const [category, setCategory] = useState(initialCategory);
  const [validation, setValidation] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = FormValidation(category);

    if (Object.keys(errors).length > 0) {
       // Validation errors exist
       setValidation(errors);
     
    } else {
      // there no validation errors
      props.onSubmit()
      props.modalClose()
    }
  };


  return (
    <>
      {/* Add new value page */}
      <Modal backdrop="static" show={props.show}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header>
            <Modal.Title>ADD DETAILS</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              className={`form-control ${validation.Name ? "is-invalid" : ""}`}
              name="Name"
              id="nameLabel"
              placeholder="Enter name"
              value={props.category.Name}
              onChange={props.setCategory}
            />

            {validation.Name && (
              <div className="text-danger">{validation.Name}</div>
            )}
    
            <input
              type="email"
              placeholder="Enter email"
              className={`form-control ${validation.Email ? "is-invalid" : ""}`}
              name="Email"
              id="nameLabel"
              placecholder="Enter email"
              value={props.category.Email}
              onChange={(event) => props.setCategory(event)}
            />
           
            {console.log(category.Email)}
            {validation.Email && (
              <div className="text-danger">{validation.Email}</div>
            )}
           
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={props.modalClose}>
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              value="submit"
              onClick={props.onSubmit}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Modals;
