import React, { useState } from "react";

const DemoUseState = () => {
  const [product, setProduct] = useState({});

  const handleProduct = () => {
    setProduct({
      productName: "T-shirt",
      color: "black",
      price: "5000",
      size: "xl",
    });
  };

  const handleProductName = () => {
    setProduct({
      productName: "T-shirt",
    });
  };

  const handleProductImg = () => {
    setProduct({
      productName: "T-shirt",
      color: "black",
      price: "5000",
      size: "xl",
      img: [
        "https://images.unsplash.com/photo-1683878483072-c8bba09035d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1683733526309-dda17085a051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      ],
    });
  };

  return (
    <>
      <div className="container mb-5">
        <h1 className="mt-5 mb-5">Demo useState</h1>
        <div>
          {/* code without json.stringify */}

          {/* Object.entries is a javascript function used to get value from itself object  */}
          {Object.entries(product).map(([key, value]) => {
            // Array.isArray checks if the key img is present and inside that
            // array is present then this method works.
            if (key === "img" && Array.isArray(value)) {
              return (
                <div key={key} className="mb-5">
                  <strong>{key}: </strong>
                  <br />
                  {value.map((image, index) => (
                    <img
                    
                      key={index}
                      src={image}
                      alt="ProductImage"
                      className="mt-3 ms-2"
                      height={"140px"}
                      width={"140px"}
                    />
                  ))}
                </div>
              );
            } 
            else {
              return (
                <p key={key}>
                  <strong>{key}: </strong>
                  {value}
                </p>
              );
            }
          })}
        </div>

        <button type="button" className="btn btn-success" onClick={handleProduct}>
          Show Product
        </button>&nbsp;
        <button type="button" className="btn btn-secondary" onClick={handleProductName}>
          Show Product Name
        </button>&nbsp;
        <button type="button" className="btn btn-primary" onClick={handleProductImg}>
          Show Product with img
        </button>&nbsp;
      </div>
    </>
  );
};

export default DemoUseState;
