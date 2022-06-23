import React from 'react';
import '../../../css/developers.css';
import DevCard from './DevCard';
import SearchBar from './SearchBar';

export default function Developers() {
  return (
    <main>
      <SearchBar />
      <h1>Results</h1>
      <div className='dev-grid'>
        <DevCard />
        <DevCard />
        <DevCard />
        <DevCard />
        <DevCard />  
      </div>
    </main>
  )
}
