import React from 'react';

export const SearchBar = (props) => {

    return (
     
            <div className="container search">
                <i className="fas fa-search"></i> <input type="search" id="search-bar" placeholder="Search users..." onChange={(event) => props.searchInput(event)} value={props.inputValue}/>
            </div>
       
    );
};

