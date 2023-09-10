import React, { useState } from 'react';
import '../styles/card.scss'
import Img from '../assets/no-image.png'
import { CardPrewiew } from '../types/interfaces';

export const Card = (props: CardPrewiew) => {

  return (
    <div className="card" id={props.id} >
      <img src={props.image ? props.image.smallThumbnail : Img} alt="img" className="image" />
      <div className="info">
        <p className='category'>{props.categories && props.categories}</p>
        <h5>{props.title}</h5>
        {props.authors && props.authors.map(el => <p key={el}>{el}</p>)}
      </div>
    </div>)
}
