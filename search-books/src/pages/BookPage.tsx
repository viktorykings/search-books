import React from 'react'
import { Book } from '../components/Book'
import { useNavigate } from 'react-router-dom';


export const BookPage = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
      }
  return (
    <div className="bookPage">
      <button onClick={handleClick}>Back to library</button>
      <Book />
    </div>  )
}
