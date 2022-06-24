import React, { useState } from 'react';
import '../../../css/form.css';
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail]  = useState('');
  const [password, setPassword] = useState('');
  let userData = localStorage.getItem('users');
  const [users, setUsers] = useState( userData ? JSON.parse(userData) : []);

  const handleEmail = ev => {
    setEmail(ev.target.value);
  }

  const handlePassword = ev => {
    setPassword(ev.target.value);
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    document.querySelectorAll(`p[id$='-error'`).forEach( errField => {
      errField.value = '';
      errField.style.display = 'none';
    })

    let $loginError = document.querySelector('#login-error');
    let validUser = users.filter( user => user.email === email);
    
    if ( !email || !password || users.length == 0  || validUser.length !== 1 || validUser[0].password != password ) {
      $loginError.textContent = 'Please enter a valid email / password combination.';
      $loginError.style.display = 'block';

      return null;
    }

    localStorage.setItem('CurrentUser', JSON.stringify(validUser))
    window.location = '/';
  }

  return (
    <main>
      <form className='login p-5' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <p id='login-error'></p>
        <div className='form-field d-flex align-items-center p-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
          </svg>
          <input className='input' type='email' name='email' id='email' placeholder='Email' onChange={handleEmail} required />
          <p id='email-error'></p>
        </div>

        <div className='form-field d-flex align-items-center p-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
          <input className='input' type='password' name='password' id='password' placeholder='Password' minLength='8' onChange={handlePassword} required />
          <p id='password-error'></p>
        </div>
        <div>
          <Link to='/register' style={{textDecoration:'none'}}>Not yet a member?</Link>
        </div>
        <input className='w-100 btn btn-secondary' type="submit" value="Log In" />
      </form>
    </main>
  )
}