import React from 'react';
import './TodoSearch.css';

export function TodoSearch({searchValue, setSearchValue}) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    console.log(searchValue);
    return (
        <input
            className="TodoSearch" 
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange} />
    )
}
