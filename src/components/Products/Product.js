import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Product = (props) => {
  const { name, img, stock, price,key } = props.product
  return (
    <div className="products">
      <div className="products-image">
        <img src={img} alt="" />
        
      </div>
      <div className="products-name">
        <h4 className="item-name"><Link to={"/product/"+key}>{name}</Link></h4>
        <p>
          <small> Left in stock : {stock}</small>{' '}
        </p>
        <p className="price-tag">Price:{price}</p>
        {props.showAddtoCart &&  <button className="main-button" 
        onClick={()=>props.handleAddProduct(props.product)}
        ><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to Cart </button>}        
      </div>
    </div>
  );
};

export default Product;
