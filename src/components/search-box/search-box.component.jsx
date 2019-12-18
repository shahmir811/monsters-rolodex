import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ placeholder, searchField, handleChange }) => {
  return (
    <div>
      <input
        className='search'
        type='search'
        placeholder={placeholder}
        value={searchField}
        onChange={e => handleChange(e)}
      />
    </div>
  );
};

export default SearchBox;
