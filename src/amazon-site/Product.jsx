import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { AmazonTshirtJSON } from "../json/AmazonJson";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [img, setimg] = useState(null);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [price, setPrice] = useState(null);
  const [discount, setDiscount] = useState(null);

  const { id } = useParams();
  const selectedCard = AmazonTshirtJSON.find((item) => item.id === Number(id));
  if (!selectedCard) {
    return <div>card not found</div>;
  }

  const handleImg = (source) => {
    console.log(source.image);
    setimg(source.image);
    setColor(source.color);
    setSize(source.size);
    setPrice(source.price);
    setDiscount(source.discountPercentage);
  };

  return (
    <>
      <Container>
        <Row>
          <Card>
            <Card.Title>{selectedCard.ProductTitle}</Card.Title>
            <Row>
              <Col lg={6}>
                {img === null ? (
                  <div>
                    {selectedCard.variation.length > 0 && (
                      <Card.Img
                        variant="top"
                        src={selectedCard.variation[0].image}
                        style={{ width: "500px", height: "500px" }}
                      />
                    )}
                  </div>
                ) : (
                  <div>
                    {selectedCard.variation.length > 0 && (
                      <Card.Img
                        variant="top"
                        src={img}
                        style={{ width: "500px", height: "500px" }}
                      />
                    )}
                  </div>
                )}

                <div className="fw-bolder fs-2 ms-5 mt-2">
                  {price === null ? (
                    <>
                      <p className="text-danger ">
                        {" "}
                        MRP:{" "}
                        <span className="text-dark">
                          {selectedCard.variation[0].price}
                          <i class="bi bi-currency-rupee"></i>
                        </span>
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-danger">
                        {" "}
                        MRP:{" "}
                        <span className="text-dark">
                          {price}
                          <i class="bi bi-currency-rupee"></i>
                        </span>
                      </p>
                    </>
                  )}

                  {discount === null ? (
                    <>
                      <p className="text-danger display-6 fw-semibold ">
                        {" "}
                        <span>
                          {selectedCard.variation[0].discountPercentage}
                        </span>
                        <span>% discount</span>
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-danger display-6 fw-semibold">
                        {" "}
                        <span>{discount}</span>
                        <span>% discount</span>
                      </p>
                    </>
                  )}
                </div>
              </Col>

              <Col lg={6}>
                <Row>
                  <span className="text-warning">
                    {[...Array(selectedCard.rating)].map((index) => (
                      <i className="bi bi-star-fill" key={index}></i>
                    ))}
                    {[...Array(5 - selectedCard.rating)].map((index) => (
                      <i className="bi bi-star" key={index}></i>
                    ))}
                     <span className="text-dark ms-3">330 Ratings</span>
                  </span>

                 
                  <hr />
                  <span>
                    {color === null ? (
                      <>
                        <p className="text-muted">
                          {" "}
                          Colour:{" "}
                          <span className="text-dark">
                            {selectedCard.variation[0].color}
                          </span>
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-muted">
                          {" "}
                          Colour: <span className="text-dark">{color}</span>
                        </p>
                      </>
                    )}
                  </span>
                  {selectedCard.variation.map((e, index) => (
                    <>
                      <Col>
                        <Card.Img
                          variant="top"
                          src={e.image}
                          key={index}
                          source={e}
                          onMouseOver={() => handleImg(e)}
                          style={{ width: "70px", height: "100px" }}
                        />
                      </Col>
                    </>
                  ))}
                  <hr className="mt-4" />

                  {size === null ? (
                    <>
                      <p className="text-muted">
                        {" "}
                        Size:{" "}
                        <span className="text-dark">
                          {selectedCard.variation[0].size}
                        </span>
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-muted">
                        {" "}
                        Size: <span className="text-dark">{size}</span>
                      </p>
                    </>
                  )}

                  {/*to display size in buttons  */}

                  {size === null ? (
                    <button
                      type="button"
                      className="btn btn-secondary w-25 me-5"
                    >
                      size: {selectedCard.variation[0].size}
                    </button>
                  ) : (
                    <div>
                      {selectedCard.variation.map((item) => (
                        <>
                          {item.size === size ? (
                            <button
                              type="button"
                              className="btn btn-secondary w-25  ms-4 me-4"
                            >
                              size: {size}
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="btn btn-outline-secondary w-25  ms-4 me-4 text-decoration-line-through"
                            >
                              size: {item.size}
                            </button>
                          )}
                        </>
                      ))}
                    </div>
                  )}
                  <hr className="mt-4" />
                  <p className="text-primary">size chart <i class="bi bi-chevron-down"></i></p>
                  <ul className="mt-2 text-secondary fw-semibold">
                    <li> Care Instructions: Machine Wash</li>
                   <li>Fit Type: Regular Fit</li>
                   <li>Care Instructions: Machine wash cold, Tumble dry low, Wash Clothes Inside Out With Similar Color.</li>
                   <li>Fabric Type: Cotton Blend</li>
                   <li>Pattern name: Checkered</li>
                   <li>Closure Type: Polo Neck</li>
                   <li>Sleeve Type: Half Sleeve</li>
                  </ul>
                </Row>
              </Col>
            </Row>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Product;
