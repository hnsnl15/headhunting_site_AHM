import React from 'react';
import profile_picture from '../imgrsr/profile.png';

export default function DevCard() {
  return (
    <div className='dev-card'>
      <div className='dev-card-img'>
        <img className='dev-pic' src={profile_picture} alt='Profile Picture' />
      </div>
      <div className='dev-card-body'>
        <div className='dev-card-text'>
          <h2 className='dev-name'>Lastname, First Name</h2>
          <p className='dev-role'>Full Stack Web Developer</p>
          <p className='dev-description'>Lorem ipsum blah blah blah x2 x2 x2 times two.</p>
          <p className='dev-location'>Manila, PH</p>
        </div>
        <div className='dev-card-actions'>
          <a target='_blank' href='https://google.com'>Portfolio</a>
        </div>
      </div>
    </div>
  )
}
