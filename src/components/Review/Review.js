import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import happyimage from '../../images/giphy.gif';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';
const Review = () => {
  const [cart, setCart] = useState([]);
  const auth = useAuth();
  const [orderPlaced, setOrderplaced] = useState(false);
  const handlePlaceOrder = () => {
    setCart([]);
    setOrderplaced(true);
    clearTheCart();
  };
  const removeProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDb(productKey);
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
  let thankyou;
  if (orderPlaced) {
    thankyou = <img src={happyimage} alt="" />;
  }
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((products) => (
          <ReviewItem
            product={products}
            removeProduct={removeProduct}
            key={products.key}
          ></ReviewItem>
        ))}
        {thankyou}
      </div>
      <div>
        <Cart cart={cart}>
          <Link to="/shipment">
            {auth.user ? (
              <button className="main-button">Proceed to shipment</button>
            ) : (
              <button className="main-button">Login to Proceed</button>
            )}
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
