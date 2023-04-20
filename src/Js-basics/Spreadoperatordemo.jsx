import React, { useState } from "react";

const Spreadoperatordemo = () => {
  const initialform = {
    name: "",
    email: "",
    password: "",
  };
  const [form, setForm] = useState(initialform);
  const onChangehandler = (e) => {
    const  { name,value } = e.target

    setForm({
        ...form,
        [name] : value,
    })
  };
  
  return (  
    <>
     
      <h1 className="mt-5 mb-5 display-6 ms-5">Spread operator demo:-</h1>
      <div className="contatiner">
        <form action="">
          <div className="row  mt-3 mb-3 ms-5 ">
            <label htmlFor="Name" className="col-2">
              Name:
            </label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="name"
                value={form.name}
                onChange={onChangehandler}
              />
            </div>
          </div>
          <div className="row  mt-3 mb-3 ms-5 ">
            <label htmlFor="Name" className="col-2">
              Email:
            </label>
            
            <div className="col-8">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                name="email"
                value={form.email}
                onChange={onChangehandler}
              />
            </div>
          </div>
          <div className="row  mt-3 mb-3 ms-5 ">
            <label htmlFor="Name" className="col-2">
              Password:
            </label>
            <div className="col-8">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                name="password"
                value={form.password}
                onChange={onChangehandler}
              />
            </div>
          </div>
          <center>
          <button className="btn btn-primary">Submit</button>
          </center>
        </form>
      </div>
      <p className="ms-5">{JSON.stringify(form)}</p>
    </>
  );
};

export default Spreadoperatordemo;
