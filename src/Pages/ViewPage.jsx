import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ViewPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  // read opereation
  const getData = async () => {
    const result = await axios.get(
      "https://63db8ebec45e08a04348204c.mockapi.io/emp-manage-app"
    );
    setData(result.data);
  };

  // delete operation
  const handleDelete = async (id) => {
    alert("Data deleted Successfully");
    await axios.delete(
      `https://63db8ebec45e08a04348204c.mockapi.io/emp-manage-app/${id}`
    );
    getData();
  };

  // edit button functionality
  const handleEdit = (id) => {
    navigate(`/Edit/${id}`);
  };

  // add button functionality
  const navigateAddPage = () => {
    navigate("/AddPage");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row mb-5">
          <div className="col">
            <h1 className="text-success">Employee List</h1>
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={navigateAddPage}>
              Add Data
            </button>
          </div>
        </div>

        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Contact</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
                  <>
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.gender}</td>
                      <td>{item.contact}</td>
                      <td>{item.department}</td>
                      <td>{item.salary}</td>
                      <td>{item.date}</td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => handleEdit(item.id)}
                        >
                          EDIT
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(item.id)}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
};

export default ViewPage;
