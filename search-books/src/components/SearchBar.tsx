import React from 'react';
import Icon from '../assets/search-icon.png';
import '../styles/search.scss'

export const SearchBar = () => {
  return (
    <div className="search">
      <input
        id="search"
        type="search"
      />
    <label htmlFor="search">
        <img src={Icon} alt="Search" className="icon" />
      </label>
    </div>  )
}
