import React from 'react'
import './login.css'

function LoginForm() {
  return (
    <div className='loginContainer'>
        <h2>Register Here</h2>
        
        <label>Email:</label>
        <input type='text' name='email' placeholder='Enter Email here.'/>
        
        <label>Password:</label>
        <input type='password' name='password' placeholder='Enter password here.'/>

        <button>Submit</button>
        
    </div>
    
  )
}

export default LoginForm