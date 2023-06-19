import React, { useEffect, useState } from "react";
import FormValidate from "../Validation/FormValidate";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddEditPage = ({ Editmode }) => {
  const initialData = {
    name: "",
    email: "",
    gender: "",
    contact: "",
    department: "",
    salary: "",
    date: "",
  };
  const [data, setData] = useState(initialData);
  const [validation, setValidation] = useState(initialData);

  const navigate = useNavigate();

  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = FormValidate(data);
    if (Object.keys(errors).length > 0) {
      setValidation(errors);
    } else {
      // edit operation
      if (Editmode) {
        const update = axios.put(
          `https://63db8ebec45e08a04348204c.mockapi.io/emp-manage-app/${id}`,
          data
        );
        setData((await update).data);
        alert("Data Edited Successfully");
        navigate("/");
      } else {
        const res = await axios.post(
          "https://63db8ebec45e08a04348204c.mockapi.io/emp-manage-app",
          data
        );
        alert("Data Submitted successfully");
        setData(res.data);
        navigate("/");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(e.target.value);
  };

  const editData = () => {
    axios
      .get(`https://63db8ebec45e08a04348204c.mockapi.io/emp-manage-app/${id}`)
      .then((response) => {
        const { name, email, gender, contact, department, salary, date } =
          response.data;
        setData({
          name: name,
          email: email,
          gender: gender,
          contact: contact,
          department: department,
          salary: salary,
          date: date,
        });
      })
      .catch((error) => {
        console.log(`Error in page id ===${id}`, error);
      });
  };
  // if it is edit page then the data get on page of selected id
  useEffect(() => {
    if (Editmode) {
      editData();
    }
  }, [Editmode, id]);

  return (
    <>
      <div className="container mt-4">
        <center>
          <h2 className="mt-2 text-success shadow  display-6 fw-normal p-3 mb-5 bg-body-tertiary rounded">
            Employee Details
          </h2>
        </center>

        <h3 className="mt-4 mb-3">
          {" "}
          {Editmode ? "Edit" : "Add"} Employee Data --
        </h3>

        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Employee Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={data.name}
              name="name"
              onChange={handleChange}
            />
            {validation.name && (
              <div className="text-danger">{validation.name}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Employee's Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
              value={data.email}
              name="email"
              onChange={handleChange}
            />
            {validation.email && (
              <div className="text-danger">{validation.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="Gender" className="form-label">
              Select Gender
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="Male">
                male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="Female">
                female
              </label>
            </div>
            {validation.gender && (
              <div className="text-danger">{validation.gender}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="Contact" className="form-label">
              Employee Contact Number
            </label>
            <input
              type="text"
              name="contact"
              value={data.contact}
              placeholder="Enter Contact"
              maxLength={10}
              onChange={handleChange}
              className="form-control"
            />
            {validation.contact && (
              <div className="text-danger">{validation.contact}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="Department" className="form-label">
              Select Department
            </label>
            <select
              name="department"
              value={data.department}
              className="form-select w-25"
              onChange={handleChange}
              id=""
            >
              <option value="" disabled>
                {" "}
                Select Department
              </option>
              <option value="Finance Department">Finance Department</option>
              <option value="Marketting Department">
                Marketting Department
              </option>
              <option value="Accontancy Department">
                Accontancy Department
              </option>
              <option value="Technology Department">
                Technology Department
              </option>
            </select>
            {validation.department && (
              <div className="text-danger">{validation.department}</div>
            )}
          </div>

          <div className="row">
            <div className="mb-3 col-4 w-25">
              <label htmlFor="Contact" className="form-label">
                Enter Employee Salary
              </label>
              <input
                type="text"
                name="salary"
                value={data.salary}
                placeholder="Employee Salary"
                maxLength={6}
                onChange={handleChange}
                className="form-control"
              />
              {validation.salary && (
                <div className="text-danger">{validation.salary}</div>
              )}
            </div>

            <div className=" mb-3 col-4 w-25">
              <label htmlFor="nameLabel" className="form-label">
                Enter Join Date
              </label>
              <input
                type="date"
                className="form-control"
                name="date"
                id="nameLabel"
                placecholder="Enter Join Date"
                value={data.date}
                onChange={handleChange}
              />
              {validation.date && (
                <div className="text-danger">{validation.date}</div>
              )}
            </div>
          </div>
          <button className="btn btn-primary mt-3 mb-4">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddEditPage;
