import React from 'react';
import { useAppDispatch } from '../hooks/useTypesSelector';
import { saveFilterValue } from '../store/action-creator/filter';
import { googleBooksApi } from '../services/googleBooksApi';
import { showMore } from '../store/action-creator/showMore';

export const Categories = () => {
  const dispatch = useAppDispatch();
  const handleSelect = (e:  React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(googleBooksApi.util.resetApiState())
      dispatch(showMore(0))
    dispatch(saveFilterValue(e.target.value))
  }
  const categoriesFilter = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
  return (
    <>
        <label htmlFor="select-category">Sorting by:</label>
        <select id="select-category" onChange={handleSelect}>
            <option value="All">All</option>
            <option value="Art">Art</option>
            <option value="Biography">Biography</option>
            <option value="Computers">Computers</option>
            <option value="History">History</option>
            <option value="Medical">Medical</option>
            <option value="Poetry">Poetry</option>
        </select>
    </>
  )
}
