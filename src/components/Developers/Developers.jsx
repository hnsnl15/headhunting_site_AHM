import React from 'react';
import '../../../css/developers.css';
import DevCard from './DevCard';
import SearchBar from './SearchBar';

export default function Developers() {
  const userData = localStorage.getItem('users');
  const users = userData
              ? JSON.parse(userData)
              : [];

  function renderDevCards() {
    if (users.length > 0) {
      users.map( user => {
        return <DevCard 
          name = {`${user.lastname}, ${user.firstname}`}
        />
      })
    } else {
      return <h2>No Results</h2>
    }
  }

  return (
    <main>
      <SearchBar />
      <h1>Developers</h1>
      <div className='dev-grid'>
        {renderDevCards()}
      </div>
    </main>
  )
}
