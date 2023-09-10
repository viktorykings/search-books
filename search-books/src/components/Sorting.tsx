import React from 'react'
import { useAppDispatch } from '../hooks/useTypesSelector';
import { saveSortValue } from '../store/action-creator/sortValue';
import { googleBooksApi } from '../services/googleBooksApi';
import { showMore } from '../store/action-creator/showMore';
import { MySelect } from './MySelect';
import { sortFilter } from '../constants/filters';

export const Sorting = () => {
  const dispatch = useAppDispatch();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(googleBooksApi.util.resetApiState())
    dispatch(showMore(0))
    dispatch(saveSortValue(e.target.value))
  }

  return (
    <>
      <MySelect options={sortFilter} label='Sorting by:' id='select' handleSelect={handleSelect} />
    </>
  )
}
