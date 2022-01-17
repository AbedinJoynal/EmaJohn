import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, prod) => total + prod.price, 0);

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
      <Link to="/review">
        <button className="reveiw-button">Review Order</button>
      </Link>
    </div>
  );
};

export default Cart;
