import React from 'react';
import '../../../css/developers.css';
import DevCard from './DevCard';
import SearchBar from './SearchBar';

export default function Developers() {
  // exlucde current user from developers list
  // const currUserData = localStorage.getItem('CurrentUser');
  // const currUser = currUserData
  //                ? JSON.parse(currUserData)
  //                : [];
  const userData = localStorage.getItem('users');
  const users = userData
              ? JSON.parse(userData)
              : [];

  function renderDevCards() {
    if (users.length > 0) {
      return users.map( user => {
        // if (user.id === currUser[0].id) return null;
        return <DevCard 
          user = {user}
        />
      })
    } else {
      return <h2>No Results</h2>
    }
  }

  return (
    <section>
      <SearchBar />
      <h1>Developers</h1>
      <div className='dev-grid'>
        {renderDevCards()}
      </div>
    </section>
  )
}
