import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getStoredCart } from '../../utilities/fakedb';
const Review = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = getStoredCart();
     const productKeys = Object.keys(savedCart);
     const cartProducts = productKeys.map((key) => {
       const product = fakeData.find((products) =>products.key === key);
       product.quantity = savedCart[key];
       return product;
       
      });
       setCart(cartProducts);
  },[]);
  return ( 
    <div>
      
      <h2> Cart Items : {cart.length}</h2>
    </div>
  );
};

export default Review;
