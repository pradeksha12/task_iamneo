import React from 'react'
import './Register.css'
export default function Register() {
  return (
    <div className='regis'>
    <div className='register'>
      <h2>Register and Start your free trail</h2>
      <div class="form-group">
            <label for="fname">First Name</label>
            <br></br>
            <input type="text" id="fname" name="fname" required></input>
            <br></br>
            <label for="lname">Last Name</label>
            <br></br>
            <input type="text" id="lname" name="lname" required></input>
            <br></br>
            <label for="email">Email Address</label>
            <br></br>
            <input type="email" id="email" name="email" required></input>
            <br></br>
            <label for="orgname">Organization Name</label>
            <br></br>
            <input type="text" id="orgname" name="orgname" required></input>
      </div>
      <div class="form">
            <label for="password">Password</label>
            <br></br>
            <input type="password" id="password" name="password" required></input>
            <br></br>
            <label for="repassword">Re-enter Password</label>
            <br></br>
            <input type="password" id="repassword" name="repassword" required></input>
            <p></p>
            <p>Already have an a account?<a href="https://www.bing.com/search?pglt=169&q=react&cvid=6c88fd5abd2047f59c50456b45ccdbda&gs_lcrp=EgZjaHJvbWUqBAgAEAAyBAgAEAAyBAgBEC4yBAgCEAAyBAgDEAAyBAgEEC4yBAgFEAAyBAgGEAAyBAgHEAAyBggIEEUYPdIBCDI2NDhqMGoxqAIAsAIA&FORM=ANNTA1&PC=U531"> Login</a> here.</p>
        </div>
        <button type="submit" class="button-login">REGISTER</button>

    </div>
    </div>
  )
}
