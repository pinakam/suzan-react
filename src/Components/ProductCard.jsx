import React from "react";
import { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { CartContext } from "../Context-api-programs/product-site/CartContext";

const ProductCard = (props) => {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  // console.log(cart.items);

  return (
    <>
      <h3>{product.brand}</h3>
      <Card style={{ width: "20rem" }}>
        <Card.Header>{product.category}</Card.Header>
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>

          <Card.Text>{product.description}</Card.Text>
          <h4>
            <span className="text-secondary">Price:</span>
            {product.price}$
          </h4>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            {" "}
            <span className="text-secondary">Stock:</span>
            {product.stock}
          </ListGroup.Item>
          <ListGroup.Item className="text-danger">
            Discount:{product.discountPercentage}%
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          {productQuantity > 0 ? (
            <>
              <Form as={Row}>
                <Form.Label column="true" sm="6">
                  In Cart: {productQuantity}
                </Form.Label>
                <Col sm="6 ">
                  <Button
                    sm="6"
                    className="mx-2"
                    onClick={() => cart.addOneToCart(product.id)}
                  >
                    +
                  </Button>
                  <Button
                    sm="6"
                    className="mx-2"
                    onClick={() => cart.removeOneFromCart(product.id)}
                  >
                    -
                  </Button>
                </Col>
              </Form>
              <Button
                variant="danger"
                className="my-2"
                onClick={() => cart.deleteFromCart(product.id)}
              >
                Remove From cart
              </Button>
            </>
          ) : (
            <Button
              variant="success"
              onClick={() => cart.addOneToCart(product.id)}
            >
              ADD to cart
            </Button>
          )}
         
         
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
