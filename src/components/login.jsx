import React, { useState } from "react";
import axios from "axios";
import "../css/Login.css"; 
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://backend-ashen-pi.vercel.app/login', {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h2>Sign up</h2>
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input
              type="text"
              placeholder="Your Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit">Log in</button>
          {error && <p className="error-message">{error}</p>}
          <Link to="/signup" className="signup-link">Create an account</Link>
          <div className="social-login">
            <p>Or login with</p>
            <div className="social-icons">
              <a href="#facebook" className="social-icon"><img id="icon1" src="15.png" /></a>
              <a href="#twitter" className="social-icon"><img id="icon2" src="16.png" /></a>
              <a href="#google" className="social-icon"><img id="icon3" src="17.png" /></a>
            </div>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Login;
