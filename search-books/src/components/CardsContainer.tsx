import React, { useState } from 'react';
import { Card } from './Card';
import { googleBooksApi } from '../services/googleBooksApi';
import { useAppDispatch, useAppSelector } from '../hooks/useTypesSelector';
import { saveBookId } from '../store/action-creator/saveBookId';
import '../styles/cardsContainer.scss';
import { useNavigate } from 'react-router-dom';
import { BooksData } from '../types/interfaces';

const CardsContainer = () => {
  const { search } = useAppSelector((state) => state.search);
  const { sort } = useAppSelector((state) => state.sort);
  const { filter } = useAppSelector((state) => state.filter);
  const { id } = useAppSelector((state) => state.bookInfo);
  const {
    data: books,
    error,
    isLoading,
  } = googleBooksApi.useGetBooksQuery({q: search, sort: sort})
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  if (isLoading) {
    return <h5>Loading....</h5>;
  }
  if (error) {
    return <h5>Failed to fetch</h5>;
  }
  console.log(books)

  const handleClick = (e: React.MouseEvent) => {
    if((e.target as Element).closest('.card')?.id){
      dispatch(saveBookId((e.target as Element).closest('.card')!.id));
      navigate(`/book/${id}`)
    }

  };
  const filteredBooks = (arr: BooksData[], filterValue: string) => {
    if (filterValue === 'All') return arr
    arr = arr.filter(el => el.volumeInfo.categories)
    arr = arr.filter(el => el.volumeInfo.categories!.some(el => el === filterValue))
    console.log(arr)
    return arr
  }

  return (
    <>
      <div className="itemsCount">Found {books && books.totalItems} results</div>
      <div className="cards-container" role="contentinfo" onClick={handleClick}>
        {books && books.items &&
          filteredBooks(books.items, filter).map((el) => (
            <Card key={el.etag} id={el.id} title={el.volumeInfo.title} image={el.volumeInfo.imageLinks} authors={el.volumeInfo.authors} categories={el.volumeInfo.categories} />
          ))}
      </div>
    </>
  );
};
export default CardsContainer;
