import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
  const { name, img, stock, price } = props.product
  return (
    <div className="products">
      <div className="products-image">
        <img src={img} alt="#" />
        
      </div>
      <div className="products-name">
        <h4>{name}</h4>
        <p>
          <small> Left in stock : {stock}</small>{' '}
        </p>
        <p className="price-tag">Price:{price}</p>
        <button className="main-button" 
        onClick={()=>props.handleAddProduct(props.product)}
        ><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to Cart </button>        
      </div>
    </div>
  );
};

export default Product;
