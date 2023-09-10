import React, {useState} from 'react';
import Icon from '../assets/search-icon.png';
import '../styles/search.scss'
import { useAppDispatch, useAppSelector } from '../hooks/useTypesSelector';
import { saveSearchValue } from '../store/action-creator/searchValue';
import { googleBooksApi } from '../services/googleBooksApi';
import { showMore } from '../store/action-creator/showMore';


export const SearchBar = () => {
  const { search } = useAppSelector((state) => state.booksState);
  const [searchVal, setSearchVal] = useState(search);
  const dispatch = useAppDispatch();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      dispatch(googleBooksApi.util.resetApiState())
      dispatch(showMore(0))
      dispatch(saveSearchValue(searchVal));
    }
  };

  return (
    <div className="search">
      <input
        id="search"
        type="search"
        onChange={(e) => {
          setSearchVal(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    <label htmlFor="search">
        <img src={Icon} alt="Search" className="icon" />
      </label>
    </div>  )
}

