import React from 'react'

export const Categories = () => {
  return (
    <>
        <label htmlFor="select-category">Sorting by:</label>
        <select id="select-category">
            <option value="all">All</option>
            <option value="art">Art</option>
            <option value="biography">Biography</option>
            <option value="computers">Computers</option>
            <option value="history">History</option>
            <option value="medical">Medical</option>
            <option value="poetry">Poetry</option>
        </select>
    </>
  )
}
