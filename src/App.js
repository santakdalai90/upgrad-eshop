import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SignIn from './components/SignIn';
import React, { useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsSignUp(false);
  };

  // Toggle between SignIn and SignUp components
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div className="App">
      {/* Render the Navbar component */}
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} onShowSignUp={setIsSignUp} />

      {isLoggedIn ? (
          <h2>Welcome to upGrad E-Shop!</h2>
        ) : isSignUp ? (
          <Signup onToggleForm={toggleForm} />
        ) : (
          <SignIn onToggleForm={toggleForm} onLoginSuccess={handleLoginSuccess} />
        )}

      {/* {isSignUp ? <Signup onToggleForm={toggleForm} onLoginSuccess={handleLoginSuccess} /> : <SignIn onToggleForm={toggleForm} />} */}
      <main>
        <h1>Welcome to the upGrad E-Shop</h1>
        {/* Other content goes here */}
      </main>
    </div>
  );
}

export default App;
