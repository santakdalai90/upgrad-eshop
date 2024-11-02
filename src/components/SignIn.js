// SignIn.js
import React, { useState } from 'react';
import { authenticateUser } from './Auth';
import './SignIn.css';

const SignIn = ({ onToggleForm, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (authenticateUser(email, password)) {
      alert('Login successful!');
      setError('');
      // Redirect or perform actions on successful login
      onLoginSuccess();
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <i className="fas fa-lock lock-icon"></i>
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="signin-button">SIGN IN</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p>
          Don’t have an account? <a href="#" onClick={onToggleForm}>Sign Up</a>
        </p>
      </div>
      <footer>
        <p>Copyright © <a href="https://www.upgrad.com">upGrad</a> 2021.</p>
      </footer>
    </div>
  );
};

export default SignIn;
