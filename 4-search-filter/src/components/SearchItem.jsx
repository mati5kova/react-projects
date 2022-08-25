import React from 'react';

const SearchItem = ({ setSearch }) => {
    return (
        <input
            autoFocus
            placeholder="Search:"
            type="text"
            onChange={(e) => {
                setSearch(e.target.value);
            }}
        ></input>
    );
};

export default SearchItem;
