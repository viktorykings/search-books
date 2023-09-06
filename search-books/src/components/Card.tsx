import React from 'react';
import '../styles/card.scss'

export const Card = () => {
  return (
    <div className="card" id=''>
      <img src='' alt="img" className="image" />
      <div className="info">
        <h5>Name</h5>
        <p>Category</p>
        <p>Author</p>
      </div>
    </div>  )
}
