import { createContext, useEffect, useState } from "react";
import { getProductData } from "./CartHelper";
export const CartContext = createContext({
    
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});
export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(() => {
    
    const storedProducts = localStorage.getItem("cartProducts");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  function getProductQuantity (id){
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }
  function addOneToCart(id) {
    const quantity = getProductQuantity(id);
    //   product is not in the cart
    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
       
      ]);
      
    }
    //   product is in the cart
    else {
      setCartProducts(
        cartProducts.map(product =>
          product.id === id
            ? {
                ...product,
                quantity: product.quantity + 1,
              }
            : product
        )
      );
     
    }
  }
  // getProductData is for finding id of clicked button
  function getTotalCost () {
    let TotalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      TotalCost += productData.price * cartItem.quantity;
    });
    return TotalCost;
  }

  function removeOneFromCart (id){
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? {
                ...product,
                quantity: product.quantity - 1,
              }
            : product
        )
      );
    }
  }

  function deleteFromCart (id){
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
export default CartProvider;
