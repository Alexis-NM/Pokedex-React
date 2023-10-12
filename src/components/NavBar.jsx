import React from "react";

function NavBar (props) {

    const {pokemonList, setPokemonIndex} = props

 return (
    <div>
     {pokemonList.map((pokemon, index) => (
        <button key = {index} onClick={() => setPokemonIndex(index)}>{pokemon.name}
        </button>
     )) 
    }
    </div>
)   
}


export default NavBar;