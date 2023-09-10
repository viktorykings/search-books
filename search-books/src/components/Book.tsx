import React from 'react';
import '../styles/book.scss';
import { googleBooksApi } from '../services/googleBooksApi';
import { useAppSelector } from '../hooks/useTypesSelector';
import Img from '../assets/no-image.png'

export const Book = () => {
  const { bookId } = useAppSelector((state) => state.booksState);
  const { data, error, isLoading } = googleBooksApi.useGetBookQuery(bookId)

  if (isLoading) return <p>Loading...</p>

  if (!data) {
    return <p>book not found</p>
  }

  return (
    <>
      <div className="breadcrumbs">{data.volumeInfo.categories ? data.volumeInfo.categories : 'unknown category'}</div>
      <div className='bookInfo'>
        <img src={data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : Img} alt={data.volumeInfo.title} />
        <div className="description">
          <div className="title">{data.volumeInfo.title}</div>
          <p className='authors'>{data.volumeInfo.authors}</p>
          <p>{data.volumeInfo.description}</p>
        </div>
      </div>
    </>
  )
}
