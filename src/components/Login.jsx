import { ConstructionSharp } from '@mui/icons-material';
import React, { useState } from 'react';
import '../../css/form.css';

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

    console.log('Successfully logged in...')
    window.location = '/';
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <p id='login-error'></p>
        <div className='form-field'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' onChange={handleEmail} required />
          <p id='email-error'></p>
        </div>
        <div className='form-field'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' minLength='8' onChange={handlePassword} required />
          <p id='password-error'></p>
        </div>
        <div>
          <a href='/register' style={{textDecoration:'none'}}>Not yet a member?</a>
        </div>
        <input type="submit" value="Log In" />
      </form>
    </main>
  )

  // const mainStyle = {
  //   display: 'grid',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // }

  // return (
  //   <main style={mainStyle}>
  //     <form className='container'>
  //       <div class="mb-3 row">
  //         <label for="exampleInputEmail1" class="form-label">Email address</label>
  //         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
  //       </div>
  //       <div class="mb-3 row">
  //         <label for="exampleInputPassword1" class="form-label">Password</label>
  //         <input type="password" class="form-control" id="exampleInputPassword1" required/>
  //       </div>
  //       <div class="mb-3 row">
  //         <a href='/register' style={{textDecoration:'none'}}>Not yet a member?</a>
  //       </div>
  //       <button type="submit" class="btn btn-primary">Submit</button>
  //     </form>
  //   </main>
  // )
}