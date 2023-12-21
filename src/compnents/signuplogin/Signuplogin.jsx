import React, { useState } from 'react'
import './Signuplogin.css'
import signup_icon from "../assets/signuplogo.png";
import signuplogo from "../assets/login.png";
const Signuplogin = () => {
const[action,setAction]= useState("login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"> </div>
      </div>
      <div className="inputs">
        {action==="login"?<div></div>:<div className="input">
          <img className="icons" src={signup_icon} />
          <input type="text" placeholder="Username" />
        </div>} 
        <div className="input">
          <img src={signuplogo} className="icons" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={signup_icon} className="icons" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action==="signup"?<div></div>:<div className="forgotpassword">
        <span>Forgot password? </span><span>Click here!</span>
      </div>}
      
      <div className="submit-container">
        <button className={action==="login"?"submit gray":"submit"}onClick={()=>{setAction("signup")}}>Sign Up</button>
        <button className={action==="signup"?"submit gray":"submit"}onClick={()=>{setAction("login")}}>login</button>
      </div>
    </div>
  )
}

export default Signuplogin;
