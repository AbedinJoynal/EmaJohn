import React, { useEffect, useState } from 'react';

import fakeData from '../../fakeData';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [product, setProduct] = useState(first10);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = getStoredCart();
    const productKeys = Object.keys(savedCart);
    const previousCart = productKeys.map((existingKey) => {
      const product = fakeData.find((pd) => pd.key === existingKey);
      product.quantity = savedCart[existingKey];
      return product;
    });
    setCart(previousCart);
  }, []);
  const handleAddProduct = (product) => {
    const tobeAddedKey = product.key;
    const sameproduct = cart.find((pd) => pd.key === tobeAddedKey);
    let count = 1;
    let newCart;
    if (sameproduct) {
      const count = sameproduct.quantity + 1;
      sameproduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== tobeAddedKey);
      newCart = [...others, sameproduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);

    addToDb(product.key, count);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {product.map((products) => (
          <Product
            key={products.key}
            product={products}
            showAddtoCart={true}
            handleAddProduct={handleAddProduct}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
        <Link to="/review">
            <button className="main-button">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
