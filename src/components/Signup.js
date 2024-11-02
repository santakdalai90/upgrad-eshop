import React from 'react';
import './Signup.css';

const Signup = ({ onToggleForm }) => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <i className="fas fa-lock lock-icon"></i>
        <h2>Sign up</h2>
        <form>
          <input type="text" placeholder="First Name *" required />
          <input type="text" placeholder="Last Name *" required />
          <input type="email" placeholder="Email Address *" required />
          <input type="password" placeholder="Password *" required />
          <input type="password" placeholder="Confirm Password *" required />
          <input type="tel" placeholder="Contact Number *" required />
          <button type="submit" className="signup-button">SIGN UP</button>
        </form>
        <p>
          Already have an account? <a href="#" onClick={onToggleForm}>Sign in</a>
        </p>
      </div>
      <footer>
        <p>Copyright © <a href="https://www.upgrad.com">upGrad</a> 2021.</p>
      </footer>
    </div>
  );
};

export default Signup;
