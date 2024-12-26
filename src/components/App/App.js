import React, { useState} from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Dashboard from '../Dashboard/Dashboard.js';
import Preferences from '../Preferences/Preferences.js';
import Login from '../Login/Login.js';
import { useToken } from '../services/token.js';
import loginImage from '../../images/loginImage.png'

function App() {
  const { setToken, token } = useToken()
  const [ authok, setAuthok] = useState(true)
  if (!token) {
    return (
      <>
      <header></header>
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
    <header>
    git Repository 👉🏻 <a href="https://github.com/lorenzoVwebDev/Animal-Cards">Login page</a>
    </header>
    <div className="application-wrapper">
      <div className="applications-wrapper">
      <h1>Application</h1>
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
