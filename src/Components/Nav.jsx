import  { useState } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CartContext } from '../Context-api-programs/product-site/CartContext';
import { useContext } from 'react';
import ModalCard from './ModalCard';
const Nav = () => {
  const ShoppingCart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const productsCount = ShoppingCart.items.reduce((sum, product)=> sum + product.quantity, 0)
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" className='mb-4'>
      <Container>
        <Navbar.Brand href="#home">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Button variant="primary" onClick={handleShow}>
       cart ({productsCount} items) 
      </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            productsCount > 0 ?
            <>
            <p>Item in Cart:</p>
            {ShoppingCart.items.map((currentProduct, index)=>(
             <>
           <ModalCard key={index} productId={currentProduct.id}  quantity={currentProduct.quantity}  />
             </>      
            ))}
            <h1>Total :
               {ShoppingCart.getTotalCost().toFixed(2)}</h1>
            </>:
            <p>it is light 🤔add products!</p>
          }
         </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Nav