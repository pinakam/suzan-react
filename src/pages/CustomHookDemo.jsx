import React from "react";
import useFetch from "../custom-hooks/useFetch";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CustomHookDemo = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      
      <Container>
      <h1 className=" mt-5 mb-5">Custom Hook Demo</h1>
        <Row >
          {data &&
            data.map((item) => (
              <>
                <Col lg={4}>
                  <Card>
                    <Card.Header as="h5">{item.id}</Card.Header>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
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

export default CustomHookDemo;
