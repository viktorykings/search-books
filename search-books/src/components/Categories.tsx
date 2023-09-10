import React from 'react';
import { useAppDispatch } from '../hooks/useTypesSelector';
import { saveFilterValue } from '../store/action-creator/filter';
import { googleBooksApi } from '../services/googleBooksApi';
import { showMore } from '../store/action-creator/showMore';
import { MySelect } from './MySelect';
import { categoriesFilter } from '../constants/filters';

export const Categories = () => {
  const dispatch = useAppDispatch();
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(googleBooksApi.util.resetApiState())
    dispatch(showMore(0))
    dispatch(saveFilterValue(e.target.value))
  }
  return (
    <>
      <MySelect options={categoriesFilter} label='Category:' id='select-category' handleSelect={handleSelect} />
    </>
  )
}
