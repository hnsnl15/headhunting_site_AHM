import React from 'react';
import profile_picture from '../imgrsr/profile.png';
import TechSvg from '../imgrsr/TechSvg';

export default function DevCard(props) {
  const user = props.user;
  console.log(user)

  const name = () => {
    return  `${user.lastname}, ${user.firstname}`;
  }

  const address = () => {
    return user.address == 'Cebu City, Cebu' ? 'Cebu City' : user.address == 'Davao City, Davao del Sur' ? 'Davao City' : user.address;
  }

  return (
    <div className='dev-card'>
      <div className='dev-card-img'>
        <img className='dev-pic' src={profile_picture} alt='Profile Picture' />
      </div>
      <div className='dev-card-body'>
        <div className='dev-card-text'>
          <h2 className='dev-name'>{name()}</h2>
          <p className='dev-role'>{user.position}</p>
          <p className='dev-email'>{user.email}</p>
          <p className='dev-description'>
            My Tech Stack:
            <ul>
            {
              [...(user.languages)].map( language => {
                return <TechSvg tech={language} />
              })
            }</ul>
          </p>
          <p className='dev-location'>{address()}</p>
        </div>
        <div className='dev-card-actions'>
          <a className='btn btn-primary' target='_blank' href={user.portfolio}>Portfolio</a>
        </div>
      </div>
    </div>
  )
}
