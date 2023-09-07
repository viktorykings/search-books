import React from 'react';
import { BooksData } from '../types/interfaces';

export const Book = (props: BooksData) => {

  return (
    <div className='bookInfo'>
        <img src={props.volumeInfo.imageLinks?.smallThumbnail} alt={props.volumeInfo.title} />
        <div className="description">
            <div className="breadcrumbs">cat/cat</div>
            <div className="title">{props.volumeInfo.title}</div>
            <p className='authors'>{props.volumeInfo.authors}</p>
            <p>text</p>
        </div>
    </div>
  )
}
