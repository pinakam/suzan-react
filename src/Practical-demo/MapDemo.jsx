import React from "react";
import { JSON } from "./ProductJson";
const MapDemo = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {JSON.products &&
            JSON.products.map((item) => {
              return (
                <>
                  <div className="col-3">
                    <div className="col-md-3 py-5">
                      <h1>{item.id}</h1>
                      <div
                        className="card border border-light rounded-3 shadow-lg p-3 mb-5 bg-body"
                        style={{ width: "20rem", height: "55rem" }}
                      >
                        <h3 className="card-header text-bg-dark">
                          {item.category}
                        </h3>
                        <img
                          src={item.thumbnail}
                          alt="img"
                          className="card-img-top"
                        />
                        <div className="container mt-5">
                          <div className="row">
                            {item.images.map((a) => {
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
                        <div className="card-body bg-light">
                          <h1 className="text-primary display-5 fw-medium">
                            {item.brand}
                          </h1>
                          <h2>
                            <span className="text-secondary">stock:</span>
                            {item.stock}
                          </h2>
                          <h5 className="card-title">{item.title}</h5>
                          <h6>
                            <span className="text-secondary">PRICE:</span>
                            {item.price}
                          </h6>
                          <h6>
                            {" "}
                            <span className="text-secondary">RATING:</span>
                            {item.rating}
                          </h6>
                          <p>
                            <span className="text-secondary">
                              {" "}
                              DISCOUNT PERCENTAGE:
                            </span>
                            {item.discountPercentage}
                          </p>
                          <p className="card-text">{item.desc}</p>
                          <a href="#" className="btn btn-dark">
                            Go somewhere
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default MapDemo;
