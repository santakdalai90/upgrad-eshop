import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = ({ isLoggedIn, onLogout, onShowSignUp }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <i className="fa fa-shopping-cart"></i>
        <span className="brand-name">upGrad E-Shop</span>
      </div>
      <div className="navbar-center">
        <div className="search-container">
          <i className="fa fa-search search-icon"></i>
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
      </div>
      <div className="navbar-right">
        <a href="/" className="nav-link">Home</a>
        <a href="/add-product" className="nav-link">Add Product</a>
        {isLoggedIn ? (
        <button className="logout-button">LOGOUT</button>
        ):(
          <>
          <a href="#" onClick={() => onShowSignUp(false)}>Login</a>
          <a href="#" onClick={() => onShowSignUp(true)}>Sign Up</a>
        </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
