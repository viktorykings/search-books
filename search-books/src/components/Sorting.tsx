import React from 'react'

export const Sorting = () => {
  return (
    <>
        <label htmlFor="select">Sorting by:</label>
        <select id="select">
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
        </select>
    </>
  )
}
