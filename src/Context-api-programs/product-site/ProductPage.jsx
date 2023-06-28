import { Col, Container, Row } from "react-bootstrap";
import Nav from "../../Components/Nav";
import ProductCard from "../../Components/ProductCard";
import { productJson } from "./CartHelper";
const ProductPage = () => {
  
  
  return (
    <>
      <center>
        <h1 className="p-4">Products Page</h1>
      </center>
      <Nav />
      <Container>
        <Row>
          {
            productJson.map((product, index) => (
              <>
                <Col sm={4} key={index}>
                  <ProductCard product={product} />
                </Col>
                
              </>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
