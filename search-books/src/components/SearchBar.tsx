import React, {useState} from 'react';
import Icon from '../assets/search-icon.png';
import '../styles/search.scss'
import { useAppDispatch, useAppSelector } from '../hooks/useTypesSelector';
import { saveSearchValue } from '../store/action-creator/searchValue';


export const SearchBar = () => {
  const { search } = useAppSelector((state) => state.search);
  const [searchVal, setSearchVal] = useState(search);
  const dispatch = useAppDispatch();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
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
