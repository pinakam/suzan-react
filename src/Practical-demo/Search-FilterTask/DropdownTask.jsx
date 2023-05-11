import React, { useEffect, useState } from "react";
import { JSON } from "../ProductJson";
const DropdownTask = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [removeRepeat, setRemoveRepeat] = useState([JSON]);

  useEffect(() => {
    const uniqueArray = JSON.products.filter((item, index) => {
      return (
        index === JSON.products.findIndex((obj) => {
          return item.category === obj.category;
        })
      );
    });
    setRemoveRepeat(uniqueArray);
  }, []);

  const filteredData = JSON.products.filter((item) => {
    if (selectedValue === "") {
      return true;
    } else {
      return item.category === selectedValue;
    }
  });

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <h4 className="bg-dark text-white  text-center p-3 mt-5 mb-5">
        Dropdown Task
      </h4>
      <label htmlFor="inputState" className="form-label me-5 ms-5">
        Select Category
      </label>
      <div className="text-center bg-light mb-5">
        <div className="row">
          <div className="col-md-4 me-5 ms-5">
            <select
              value={selectedValue}
              onChange={handleChange}
              id="inputState"
              className="form-select"
            >
              {removeRepeat.map((item) => {
                return (
                  <>
                    <option value={item.category}>{item.category}</option>
                  </>
                );
              })}
              <option value="" selected>
                select category
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {filteredData.map((i) => {
            return (
              <>
                <div className="col-3">
                  <div
                    className="card shadow-lg bg-body rounded"
                    style={{ width: "18rem" }}
                  >
                    <h3 className="card-header text-bg-dark">{i.category}</h3>
                    <img src={i.thumbnail} alt="img" />
                    <div className="container mt-5">
                      <div className="row">
                        {i.images.map((a) => {
                          return (
                            <>
                              <div className="col-3">
                                <img
                                  src={a}
                                  alt="img"
                                  style={{ height: "50px", width: "50px" }}
                                />
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <div className="card-body">
                      <h2 className="card-title">{i.title}</h2>
                      <h5>
                        <span className="text-secondary">stock:</span>
                        {i.stock}
                      </h5>
                      <p className="card-text">{i.description}</p>
                      <h6>
                        <span className="text-secondary">PRICE:</span>
                        {i.price}
                      </h6>
                      <h6>
                        {" "}
                        <span className="text-secondary">RATING:</span>
                        {i.rating}
                      </h6>
                      <p>
                        <span className="text-secondary">
                          {" "}
                          DISCOUNT PERCENTAGE:
                        </span>
                        {i.discountPercentage}
                      </p>
                      <a href="#" className="btn btn-dark">
                        Add TO Cart
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}{" "}
        </div>
      </div>
    </>
  );
};

export default DropdownTask;
