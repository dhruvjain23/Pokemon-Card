import React, { useState } from 'react';

const searchFunc = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search Pokémon"
            value={searchTerm}
            onChange={handleChange}
        />
    );
};

export default searchFunc;
