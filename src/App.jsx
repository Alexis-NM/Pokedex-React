import React from "react";
import PokemonCard from "./components/PokemonCard.jsx"
import PropTypes from "prop-types";


function App() {
  
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name : "mew",
       imgSrc: "",
    },
];
  return ( 
  <div>
    <PokemonCard pokemon={pokemon}/>
  </div>
  );
}

export default App;
