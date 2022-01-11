import React from 'react';
import logo from '../../images/kinbo.png';
import '../Header.css';
const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt=""/>
      <nav>
        <a href="Shop">Shop</a>
        <a href="Products">Products</a>
        <a href="Inventory">Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
