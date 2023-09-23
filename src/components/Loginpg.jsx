import React from 'react'
import './Loginpg.css'

import Register from '../components/Register';

export default function Loginpg() {
  // const register = console.log("Hai");
  return (
    <div className='app'>
    <div className='login'>
        
       <h2 className='h2'>log into your account</h2>
       <form className='login-container'>
          <div class="form-group">
            <label for="username">Username or email</label>
            <br></br>
            <input type="text" id="username" name="username" required></input>
        </div>
        <div class="form">
            <label for="password">Password</label>
            <br></br>
            <input type="password" id="password" name="password" required></input>
            <p></p>
            <p>Don't have an a account?<a href="https://www.bing.com/search?pglt=169&q=react&cvid=6c88fd5abd2047f59c50456b45ccdbda&gs_lcrp=EgZjaHJvbWUqBAgAEAAyBAgAEAAyBAgBEC4yBAgCEAAyBAgDEAAyBAgEEC4yBAgFEAAyBAgGEAAyBAgHEAAyBggIEEUYPdIBCDI2NDhqMGoxqAIAsAIA&FORM=ANNTA1&PC=U531"> Register</a> here.</p>
        </div>
        <button type="submit" class="button-login">SIGN IN</button>
    </form>
    </div>
    </div>
  );
}
