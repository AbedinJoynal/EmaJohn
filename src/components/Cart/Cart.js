import React from 'react';
import { useAuth } from '../Login/useAuth';

import './Cart.css';

const Cart = (props) => {
  const auth= useAuth();
  console.log(auth.user)
  const cart = props.cart;
  const total = cart.reduce(
    (total, prod) => total + prod.price * prod.quantity,
    0
  );

  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }
  const tax = total / 10;

  return (
    <div>
      <h4>Order Summary</h4>

      <h5>Items Ordered : {cart.length}</h5>
      <h5>Price : {total}</h5>
      <h5>Shipping : {shipping}</h5>
      <h5>Tax included : {tax}</h5>
      <h5>Total Price : {total + shipping + tax}</h5>
      <br />
      {props.children}
      <p>{}</p>
    </div>
  );
};

export default Cart;
