import React from 'react';
import './Header.css';
import { FaShoppingCart, FaBell } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>YourStore</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-icons">
        <AiOutlineSearch className="icon" />
        <FaBell className="icon" />
        <FaShoppingCart className="icon" />
      </div>
    </header>
  );
};

export default Header;
