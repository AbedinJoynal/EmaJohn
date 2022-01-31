import React from 'react';
import logo from '../../images/kinbo.png';
import '../Header.css';
import { useAuth } from '../Login/useAuth';

const Header = () => {
  const auths = useAuth();
  console.log(auths.user);
  return (
    <div className="Header">
      <img src={logo} alt="" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Inventory</a>
        {auths.user && (
          <span style={{ color: 'yellow' }}>{auths.user.name}</span>
        )}
        {auths.user ? (
          <a href="/login">{'       '} Sign Out </a>
        ) : (
          <a href="/login">Sign In</a>
        )}
      </nav>
    </div>
  );
};

export default Header;
