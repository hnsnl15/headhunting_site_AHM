import React, { useState } from 'react';
import '../../css/form.css';

export default function Register() {
  const [email, setEmail]  = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');

  const handleEmail = ev => {
    setEmail(ev.target.value);
  }

  const handleFirstname = ev => {
    setFirstname(ev.target.value);
  }

  const handleLastname = ev => {
    setLastname(ev.target.value);
  }

  const handlePassword = ev => {
    setPassword(ev.target.value);
  }

  const handleCPassword = ev => {
    setCPassword(ev.target.value);
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    document.querySelectorAll(`p[id$='-error'`).forEach( errField => {
      errField.value = '';
      errField.style.display = 'none';
    })

    if ( !password || !cPassword || password !== cPassword ) {
      let $password = document.querySelector('#password-error');
      let $cpassword = document.querySelector('#cpassword-error');
      $password.textContent = $cpassword.textContent = 'Passwords must match.';
      $password.style.display = $cpassword.style.display = 'block';
      return null;
    }    

    let userData = localStorage.getItem('users');
    let users = userData ? [...JSON.parse(userData)] : [];
    let checkEmails = users.map( user => user.email )
    
    if (checkEmails.includes(email)) {
      let $email = document.querySelector('#email-error');
      $email.textContent = 'Account already exists.';
      $email.style.display = 'block';
      return null;
    }

    let new_user = {
      id: Date.now(),
      email,
      firstname,
      lastname,
      password
    }
    localStorage.setItem('users', JSON.stringify([...users, new_user]));

    window.location = '/'
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' onChange={handleEmail} required />
          <p id='email-error'></p>
        </div>
        <div className='form-field'>
          <label htmlFor='firstname'>First Name</label>
          <input type='text' name='firstname' id='firstname' onChange={handleFirstname} required />
          <p id='firstname-error'></p>
        </div>
        <div className='form-field'>
          <label htmlFor='lastname'>Last Name</label>
          <input type='text' name='lastname' id='lastname' onChange={handleLastname} required />
          <p id='lastname-error'></p>
        </div>
        <div className='form-field'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' minLength='8' onChange={handlePassword} required />
          <p id='password-error'></p>
        </div>
        <div className='form-field'>
          <label htmlFor='cpassword'>Confim Password</label>
          <input type='password' name='cpassword' id='cpassword' minLength='8' onChange={handleCPassword} required />
          <p id='cpassword-error'></p>
        </div>
        <input type="submit" value="Register" />
      </form>
    </main>
  )
}
