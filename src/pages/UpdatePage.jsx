import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const UpdatePage = () => {
  const initialCategory = {
    Name: "",
    Email: "",
  };
  const [category, setCategory] = useState(initialCategory);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://63db8ebec45e08a04348204c.mockapi.io/cruddemo/${id}`)
      .then((response) => {
        const { name, email } = response.data;
        setCategory({
          Name: name,
          Email: email,
        });
      })
      .catch((error) => {
        console.error(`Error fetching item with ID ${id}:`, error);
      });
  }, [id]);

  const handleChange = (e) => {
    setCategory((prevCategory) => ({
      ...prevCategory,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://63db8ebec45e08a04348204c.mockapi.io/cruddemo/${id}`, {
        name: category.Name,
        email: category.Email,
      })
      .then(() => {
        alert("updated successfully");
        navigate("/");
      });
  };

  return (
    <>
      <h1>UpdatePage</h1>

      <form className="ms-3 mt-4">
        <label htmlFor="Name">Enter Name</label>
        <br />
        <input
          type="text"
          name="Name"
          id="nameLabel"
          placeholder="Enter name"
          value={category.Name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="Email">Enter Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter email"
          name="Email"
          id="nameLabel"
          placecholder="Enter email"
          value={category.Email}
          onChange={handleChange}
        />
        <br />
        <br />

        <button className="btn btn-primary ms-2" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </>
  );
};

export default UpdatePage;
