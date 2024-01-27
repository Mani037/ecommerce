import React from 'react'
import './Css/Loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'></input>
          <input type="email" placeholder='Your Mail'></input>
          <input type="password" placeholder='Your Password'></input>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an Account? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''></input>
          <p>By continuing, i agree the terms of use & privacy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup