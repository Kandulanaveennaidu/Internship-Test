import React, { useState } from 'react';

const SearchForm = ({ handleSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(query);
    };

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={handleChange} />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
