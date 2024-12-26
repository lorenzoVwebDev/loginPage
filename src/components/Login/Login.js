import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser } from '../services/loginUser.js'

function Login({ setToken, setAuthok, authok }) {
  const [ username, setUsername ] = useState()
  const [ pwr, setPassword ] = useState()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser({
      username,
      pwr
    })

    if (!response?.token) {
      setAuthok(false)
    } else {
      setAuthok(true)
      setToken(response.token)
    }
  }
  if (authok) {
    return (
      <div className="login-wrapper">
        <h4>Welcome! I'm glad to present<br/><span>my login project!</span></h4>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            <input type="text" placeholder="Username" minLength="4" maxLength="25" pattern="[A-Za-z]+" required title="User id must contain eight or more characters." onChange={(e) => {setUsername(e.target.value)}}/>
          </label>
          <label>
            <input type="password" placeholder="Password" pattern="(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}" required title="Password must contain at least one number, one uppercase and lowercase letter, and at least 8 total characters." onChange={(e) => {setPassword(e.target.value)}}/>
          </label>
          <div>
          <button type="submit" className="login-button">Login</button>
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <div className="login-wrapper">
        <h4>Username or password are wrong!</h4>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            <input type="text" placeholder="Username" minLength="4" maxLength="25" pattern="[A-Za-z]+" required onChange={(e) => {setUsername(e.target.value)}}/>
          </label>
          <label>
            <input type="password" placeholder=" Password"onChange={(e) => {setPassword(e.target.value)}}/>
          </label>
          <div>
          <button type="submit" className="login-button">Login</button>
          </div>
        </form>
      </div>
    )
  }

}

export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}