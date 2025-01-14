import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
/* import { loginUser } from '../services/loginUser.js' */
import { LoginUser } from '../CustomHooks'

function Login({ setToken, setAuthok, authok }) {
  const [ username, setUsername ] = useState()
  const [ pwr, setPassword ] = useState();
  const [credentials, setCredentials ] = useState({first: true});
  const [loginUser] = LoginUser(credentials);
  useEffect(()=> {
    let isMounted = true;
    const handleSubmit = async () => {
      const response = await loginUser(credentials);

      console.log(response)
      
      if (response != undefined ) {
 
        const { body, status} = response;
        const payload = await body.then((payload) => {
          return payload
        })

        if (status == 401) {
          setAuthok(false);
          return () => isMounted = false;
        } else if (status >= 200) {
          setAuthok(true)
          setToken(payload.token)
        }
      } else {
        return () => isMounted = false;
      }
     
    }

    if (credentials?.first != true) {
      handleSubmit();
      return () => isMounted = false; 
    } else {
      return () => isMounted = false;
    }
  }, [credentials])

  if (authok) {
    return (
      <div className="login-wrapper">
        <h4>Welcome! I'm glad to present<br/><span>my login project!</span></h4>
        <form onSubmit={(e) => {
          e.preventDefault();
          setCredentials({
            username,
            pwr
          })
        }} className="login-form">
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
        <h4 className="h4-login2">Username or password are wrong!</h4>
        <div>
        <h4 className="h4-login2">Would you like to try my login page?</h4>
        <h4 className="h4-login2">Try to use one of these credentials below!</h4>
        <ul>
          <li>Username: <span>lorenzo</span> Password: <span>Domenica@47</span></li>
          <li>Username: <span>francesco</span> Password: <span>Fiatpunto#14</span></li>
          <li>Username: <span>matteo</span> Password: <span>Minicooper@68</span></li>
        </ul>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          setCredentials({
            username,
            pwr
          })
        }} className="login-form">
          <label>
            <input type="text" placeholder="Username" minLength="4" maxLength="25" pattern="[A-Za-z]+" required onChange={(e) => {setUsername(e.target.value)}}/>
          </label>
          <label>
            <input type="password" placeholder="Password"onChange={(e) => {setPassword(e.target.value)}}/>
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