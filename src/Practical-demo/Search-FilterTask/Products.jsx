import React from "react";

const Products = ({ items, newImage }) => {
  console.log(items);
  return (
    <>
   
      <div className="card shadow-lg bg-body rounded" style={{ width: "18rem" }}>
      <h3 className="card-header text-bg-dark">{items.category}</h3>
        <img className="card-img-top" src={newImage} alt="Card image cap" />
        <div className="card-body">
        
          <h2 className="card-title">{items.title}</h2>
          <h5>
            <span className="text-secondary">stock:</span>
            {items.stock}
          </h5>
          <p className="card-text">{items.description}</p>
          <h6>
            <span className="text-secondary">PRICE:</span>
            {items.price}
          </h6>
          <h6>
            {" "}
            <span className="text-secondary">RATING:</span>
            {items.rating}
          </h6>
          <p>
            <span className="text-secondary"> DISCOUNT PERCENTAGE:</span>
            {items.discountPercentage}
          </p>
          <a href="#" className="btn btn-dark">
            Add TO Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Products;
