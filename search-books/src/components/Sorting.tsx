import React, { ReactEventHandler } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/useTypesSelector';
import { saveSortValue } from '../store/action-creator/sortValue';


export const Sorting = () => {
  const dispatch = useAppDispatch();
  const handleSelect = (e:  React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(saveSortValue(e.target.value))
    console.log(e.target.value)
  }

  return (
    <>
        <label htmlFor="select">Sorting by:</label>
        <select id="select" onChange={handleSelect}>
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
        </select>
    </>
  )
}
