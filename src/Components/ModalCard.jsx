import  { useContext } from 'react'
import { CartContext } from '../Context-api-programs/product-site/CartContext'
import { getProductData } from '../Context-api-programs/product-site/CartHelper';
import { Button, Card, ListGroup } from 'react-bootstrap';

const ModalCard = (props) => {
    const shoppingCart = useContext(CartContext);
    const id = props.productId;
    const quantity = props.quantity;
    const productData = getProductData(id) 
  return (
    <>
    <h6>{productData.brand}</h6>
      <Card style={{ width: "20rem" }}>
        <Card.Header>{productData.category}</Card.Header>
        <Card.Img variant="top" src={productData.thumbnail} />
        <Card.Body>
          <Card.Title>{productData.title}</Card.Title>
          <h4>
            <span className="text-secondary">Price:</span>
            {productData.price}$
          </h4>
        </Card.Body>
        <ListGroup className="list-group-flush">
          
          <ListGroup.Item className="text-danger">
            Discount:{productData.discountPercentage}%
          </ListGroup.Item>
        </ListGroup>
       <p> Total = {quantity}</p>
    <p> ${(quantity * productData.price).toFixed(2)}</p>
    <Button size='sm' onClick={()=> shoppingCart.deleteFromCart(id)}>Remove</Button>


      </Card>
      <hr />
    
    </>
  )
}

export default ModalCard