import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';
const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [product, setProduct] = useState(first10);
  const [cart, setCart] = useState([]);
  const handleAddProduct = (product) => {
    const newcart = [...cart, product];
    setCart(newcart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {product.map((products) => (
          <Product
            product={products}
            handleAddProduct={handleAddProduct}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        {' '}
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
