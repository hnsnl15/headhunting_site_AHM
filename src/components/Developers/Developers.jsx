import React from 'react';
import '../../../css/developers.css';
import DevCard from './DevCard';
import SearchBar from './SearchBar';

export default function Developers() {
  const userData = localStorage.getItem('users');
  const users = userData
              ? JSON.parse(userData)
              : [];

  return (
    <main>
      <SearchBar />
      <h1>Results</h1>
      <div className='dev-grid'>
        {
          users.map( user => {
            return <DevCard 
              name = {`${user.lastname}, ${user.firstname}`}
            />
          })
        }
        {/* <DevCard />
        <DevCard />
        <DevCard />
        <DevCard />
        <DevCard />   */}
      </div>
    </main>
  )
}
