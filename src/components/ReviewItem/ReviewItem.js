import React from 'react';
import './ReviewItem.css';
const ReviewItem = (props) => {
  const { name, quantity,key } = props.product;
  
  return (
    <div>
      <h5 className="products-name"> Product Name : {name}</h5>
      <h5 className="qtn">Quantity : {quantity}</h5>
      <button className="main-button"
      onClick={()=>props.removeProduct(key)}
      > Remove </button>
    </div>
  );
};

export default ReviewItem;
