import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getStoredCart } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import {removeFromDb} from '../../utilities/fakedb';
const Review = () => {
  const [cart, setCart] = useState([]);
  const removeProduct = (productKey) => {
    
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDb  (productKey)
  };
  useEffect(() => {
    const savedCart = getStoredCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((products) => products.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  return (
    <div>
      {cart.map((products) => (
        <ReviewItem
          product={products}
          removeProduct={removeProduct}
          key={products.key}
        ></ReviewItem>
      ))}
    </div>
  );
};

export default Review;
