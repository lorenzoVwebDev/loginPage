import React, { useState} from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Dashboard from '../Dashboard/Dashboard.js';
import Preferences from '../Preferences/Preferences.js';
import Login from '../Login/Login.js';
import { useToken } from '../services/token.js';
import { createUseStyles } from 'react-jss'
let fontBool = false;
window.addEventListener('resize', () => {
  if (window.innerWidth<1100) {
    fontBool = true;
  } else {
    fontBool = false;
  }
})


const useStyles = createUseStyles({
  link: {
    color: '#FF8C00',
    fontSize: fontBool ? '3.5' : '2.5',
    borderStyle: 'solid',
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: 'black'
  }
})
/* const useStyles = createUseStyles({
  link: {
    color: 'white',
    fontSize: '3.1vw',
    borderStyle: 'solid'
  }
}) */


function App() {
  const classes = useStyles();
  const { setToken, token } = useToken()
  const [ authok, setAuthok] = useState(true)


  if (!token) {
    return (
      <>
          <header className="header-2">
          git Repository 👉🏻 <a href="https://github.com/lorenzoVwebDev/loginPage">Login page</a>
          </header>
      <div className="main-container">
      <div className="login-img-container">
        <img className="login-img"src="https://i.ibb.co/88LGhZh/login-Image.png" alt="" />
      </div>
      <Login 
        setToken={setToken}
        setAuthok={setAuthok}
        authok={authok}
      />
    </div>
    </>
    )
  }
  return (
    <>
    <header className="header-1">
    git Repository 👉🏻 <a href="https://github.com/lorenzoVwebDev/loginPage">Login page</a>
    </header>
    <div className="application-wrapper">
      <div className="applications-wrapper">
      <h1>You have logged into my project!</h1>
      <h1>Just delete the token to try the other credentials.</h1>
      <h2>&#40;I am even creating the subscription page so that</h2>
      <h2>you'll be able to create your own credentials!&#41;</h2>
      <h3><a href="https://github.com/lorenzoVwebDev/loginPage" className={classes.link}> Click here</a> to know more about my login page</h3>
      <BrowserRouter>
        <Link to="dashboard"><li>Dashboard</li></Link>
        <Link to="preferences"><li>Preferences</li></Link>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/preferences" element={<Preferences/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
    </>
  )
}

export default App;
