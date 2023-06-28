import CartProvider from "./Context-api-programs/product-site/CartContext"
import ProductPage from "./Context-api-programs/product-site/ProductPage"
import Form from "./Form"
import Todo from "./Todo"
function App() {
 
  return(
  <>
  {/* to run Form decomment the index.css */}

  {/* <Form/> */}
  {/* <Todo/> */}
  <CartProvider>
  <ProductPage/>
  </CartProvider>
 
  </>
  )
  
     
}

export default App
