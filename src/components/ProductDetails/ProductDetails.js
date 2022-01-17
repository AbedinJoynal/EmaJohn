import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Products/Product';
const ProductDetails = () => {
  const { productKey } = useParams();
  const product = fakeData.find((products) => products.key === productKey);
  return (
    <div>
      <h4>Your Products : {productKey}</h4>
      <Product Product product={product}
      showAddtoCart={false}
      ></Product>
    </div>
  );
};

export default ProductDetails;
