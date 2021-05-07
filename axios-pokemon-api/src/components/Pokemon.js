import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const onClick = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=932')
        .then(response => setPokemon(response.data.results))
        .catch(err => {
            console.log(err);
        });
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