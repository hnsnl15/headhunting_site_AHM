import React from 'react'
import search from '../imgrsr/search.png'

export default function SearchBar() {
  return (
    <div className='searchbar p-2'>
      <div className='search-background'>
          <img src={search} alt="Search Icon" />
        <input type="search" placeholder='Search'/>
        <button type='button' className='btn btn-secondary'>Search
        </button>
        </div>
    </div>
  )
}
