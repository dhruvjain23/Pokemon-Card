import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './component/PokemonCard.jsx';
import Search from './component/searchFunc.jsx';

const App = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [filteredPokemon, setFilteredPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => {
                setPokemonData(response.data.results);
                setFilteredPokemon(response.data.results);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleSearch = (searchTerm) => {
        const filtered = pokemonData.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPokemon(filtered);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    return (
        <div className="App">
            <h1>Pokémon List</h1>
            <Search onSearch={handleSearch} />
            <div className="pokemon-list">
                {filteredPokemon.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default App;
