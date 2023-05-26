import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Modals from "../components/Modals";
import FormValidation from "../utils/FormValidation";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const ReadPage = () => {
  const initialCategory = {
    Name: "",
    Email: "",
  };
  const [category, setCategory] = useState(initialCategory);
 
  const [jsData, setJsData] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const location = useLocation();

  const newData = {
    name: category.Name,
    email: category.Email,
  };

  function fetchData() {
    axios
      .get("https://63db8ebec45e08a04348204c.mockapi.io/cruddemo")
      .then((res) => {
        // console.log(res.data);
        setJsData(res.data);
        console.log(res.data);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (location.state && location.state.updatedCategory) {
      // Update the data state with the updated category.
      setJsData((prevData) => {
        const updatedIndex = prevData.findIndex(
          (item) => item.id === location.state.updatedCategory.id
        );
        if (updatedIndex !== -1) {
          const newData = [...prevData];
          newData[updatedIndex] = location.state.updatedCategory;
          return newData;
        }
        return prevData;
      });
    }
  }, [location.state]);

  const header = { "Access-Control-Alllow-Origin": "*" };

  const onModalSubmit = async () => {
    const errors = FormValidation(category);
    if (Object.keys(errors).length === 0) {
      handleClose();
      try {
        const response = await axios.post(
          "https://63db8ebec45e08a04348204c.mockapi.io/cruddemo",
          newData,
          header
        );
        const newDataWithId = { ...newData, id: jsData.length + 1 };
        setJsData((prevData) => [...prevData, newDataWithId]);
      } catch (error) {
        console.error("Error creating data:", error);
      }
    } else {
      setShow(true);
    }
  };

  const closeModal = () => {
    setShow(false);
  };

  //  get  value in read page

  useEffect(() => {
    // Store data in localStorage whenever jsData changes
    localStorage.setItem("jsData", JSON.stringify(newData));
    console.log(newData);
  }, [newData]);

  useEffect(() => {
    // Retrieve data from localStorage when the component mounts
    const storedData = localStorage.getItem("jsData");
    if (storedData) {
      setJsData(JSON.parse(storedData));
      console.log(setJsData);
    }
  }, []);

  // performs delete operation
  const handleDelete = (id) => {
    alert(`Deleted id number ${id} successfully`);
    axios
      .delete(`https://63db8ebec45e08a04348204c.mockapi.io/cruddemo/${id}`)

      .then(() => {
        setJsData((prevData) => prevData.filter((item) => item.id !== id));
        console.log(`Item with ID ${id} deleted successfully.`);
      })
      .catch((error) => {
        console.error(`Error deleting item with ID ${id}:`, error);
      });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex">
          <div className="col-lg-6">
            <h1 className="mb-3">CRUD operation react js </h1>
            <h2 className="mb-4 text-primary">Employee list Page</h2>
          </div>
          <div className=" col-lg-6 justify-content-end">
            <Button variant="primary" onClick={handleShow}>
              Add new
            </Button>

            <Modals
              show={show}
              modalClose={closeModal}
              onSubmit={onModalSubmit}
              category={category}
              // Namevalue={category}
              // Emailvalue={category}
              setCategory={(event) =>
                setCategory((prevState) => ({
                  ...prevState,
                  [event.target.name]: event.target.value,
                }))
              }
            />
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">EDIT</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(jsData) && jsData.length > 0 ? (
              jsData.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>

                  <td>
                    <Link to={`/update/${item.id}`}>
                      <button
                        className="btn btn-success"
                        style={{ textDecoration: "none" }}
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
             <center>
                  <div className="spinner-border text-warning d-flex justify-content-center" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div> 
              </center>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ReadPage;
