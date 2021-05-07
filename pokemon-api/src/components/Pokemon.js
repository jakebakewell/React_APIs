import React, { useState } from 'react';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const onClick = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=932')
        .then(response => response.json())
        .then(response => setPokemon(response.results));
    }
    return (
        <div>
            <button onClick={ onClick }>Fetch Pokemon</button>
            <ul style={{maxHeight: "40rem", overflow: "auto",}}>
                {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                    return (<li key={index}>{pokemon.name}</li>)
                })}
            </ul>
        </div>
    );
}

export default Pokemon;