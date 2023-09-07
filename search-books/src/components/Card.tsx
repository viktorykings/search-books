import React, { useState } from 'react';
import '../styles/card.scss'
import { CardPrewiew } from '../types/interfaces';

export const Card = (props: CardPrewiew) => {

  return (
    <div className="card" id={props.id} >
      <img src={props.image && props.image.smallThumbnail} alt="img" className="image" />
      <div className="info">
        <p className='category'>{props.categories && props.categories}</p>
        <h5>{props.title}</h5>
        {props.authors && props.authors.map(el => <p>{el}</p>)}
      </div>
    </div>  )
}
