import React from "react";
import { Card, Container, Row, Col, Button} from "react-bootstrap";
import { AmazonTshirtJSON } from "../json/AmazonJson";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [defaultImg, setDefaultImg] = useState(
    AmazonTshirtJSON[0].variation.map((i) => i.image)
  );
  const [defaultImgsecond, setDefaultImgsecond] = useState(
    AmazonTshirtJSON[1].variation.map((i) => i.image)
  );
  return (
    <>
      <Container>
        <h1>HomePage</h1>
        <Row>
          {AmazonTshirtJSON.map((item) => (
            <>
              <Col key={item.id}>
                <Card>
                
                <Card.Title>{item.ProductTitle}</Card.Title>


                  {item.id === 1 ? (
                    <div>
                      {defaultImg && (
                        <Card.Img
                          variant="top"
                          src={defaultImg}
                          style={{ width: "150px", height: "200px" }}
                        />
                      )}
                    </div>
                  ) : (
                    <div>
                      {defaultImgsecond && (
                        <Card.Img
                          variant="top"
                          src={defaultImgsecond}
                          style={{ width: "150px", height: "200px" }}
                        />
                      )}
                    </div>
                  )}

                  <Card.Body>
                   
                  
                    <Row>
                    
                      {item.variation.map((e, index) => (
                        <>
                          <Col >
                            <Card.Img
                              variant="top"
                              src={e.image}
                              key={index}
                              style={{ width: "70px", height: "100px" }}
                            />
                            <Card.Subtitle className="mb-2 mt-2 text-muted">
                              {" "}
                              <span className="text-dark">COLOR-</span>
                              {e.color}
                            </Card.Subtitle>
                           
                            <Card.Subtitle className="mb-2 text-dark">
                              {" "}
                             
                              {e.price}

                              <span className="text-muted"><i class="bi bi-currency-rupee"></i></span>{" "}
                            </Card.Subtitle>
                           
                          </Col>
                        </>
                      ))}
                    </Row>
                    <Button variant="primary" className="mt-5">
                    <Link to={`/product/${item.id}`} >See More</Link>  
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
