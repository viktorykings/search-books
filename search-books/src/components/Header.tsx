import React from 'react';
import { SearchBar } from './SearchBar';
import { Categories } from './Categories';
import { Sorting } from './Sorting';
import '../styles/header.scss'

export const Header = () => {
  return (
    <div className='header'>
      <h1>Search for books</h1>
      <SearchBar />
      <div className="filters">
        <div className="category">
          <Categories />
        </div>
        <div className="sort">
          <Sorting />
        </div>
      </div>
    </div>
  )
}
