import React from 'react';
import { Card } from './Card';
import { googleBooksApi } from '../services/googleBooksApi';
import { useAppDispatch, useAppSelector } from '../hooks/useTypesSelector';
import { saveBookId } from '../store/action-creator/saveBookId';
import '../styles/cardsContainer.scss';
import { useNavigate } from 'react-router-dom';
import { showMore } from '../store/action-creator/showMore';

const CardsContainer = () => {
  const { search } = useAppSelector((state) => state.booksState);
  const { sort } = useAppSelector((state) => state.booksState);
  const { filter } = useAppSelector((state) => state.booksState);
  const { pagination } = useAppSelector((state) => state.booksState)
  const { bookId } = useAppSelector((state) => state.booksState);
  const {
    data: books,
    error,
    refetch,
    isLoading,
  } = googleBooksApi.useGetBooksQuery({ q: search, sort: sort, startInd: pagination, category: filter })
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  if (isLoading) {
    return <h5>Loading....</h5>;
  }
  if (error) {
    return <h5>Failed to fetch</h5>;
  }

  const handleClick = (e: React.MouseEvent) => {
    if ((e.target as Element).closest('.card')?.id) {
      dispatch(saveBookId((e.target as Element).closest('.card')!.id));
      navigate(`/book/${bookId}`)
    }

  };
  const showMoreBooks = (page: number) => {
    refetch()
    dispatch(showMore(page))
  }

  return (
    <>
      <div className="itemsCount">Found {books && books.totalItems}  results</div>
      <div className="cards-container" role="contentinfo" onClick={handleClick}>
        {books && books.items &&
          books.items.map((el) => (
            <Card key={el.etag} id={el.id} title={el.volumeInfo.title} image={el.volumeInfo.imageLinks} authors={el.volumeInfo.authors} categories={el.volumeInfo.categories} />
          ))}
      </div>
      {(books && books.items.length < books.totalItems) && <button onClick={() => showMoreBooks(pagination)}>show more</button>}
    </>
  );
};
export default CardsContainer;
