import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = ({ pokemon }) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
        axios.get(pokemon.url)
            .then(response => {
                setPokemonDetails(response.data);
            })
            .catch(error => {
                console.error('Error fetching Pokémon details:', error);
            });
    }, [pokemon.url]);

    return (
        <div className="pokemon-card">
            {pokemonDetails ? (
                <>
                    <img src={pokemonDetails.sprites.front_default} alt={pokemon.name} />
                    <h2>{pokemon.name}</h2>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default PokemonCard;
