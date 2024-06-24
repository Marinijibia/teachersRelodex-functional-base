import React from "react";
import './SearchInput.style.css'


const SearchInput = ({onSearchChange, placeholder, className}) => {
    return(
        <input 
        className={`search-input ${className}`} 
        type="search" 
        placeholder={placeholder}
        onChange={onSearchChange}
    />
    )
}


export default SearchInput;