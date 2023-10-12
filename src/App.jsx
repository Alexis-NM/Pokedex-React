import React from "react";
import PokemonCard from "./components/PokemonCard.jsx"
import PropTypes from "prop-types";
import { useState } from "react";
import NavBar from "./components/NavBar.jsx"


function App() {
  
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

    const pokemonPrecedent = () => {
      if (pokemonIndex > 0) {
          setPokemonIndex(pokemonIndex - 1)
      }
  };
  
    const pokemonSuivant = () => {
      if (pokemonIndex < pokemonList.length - 1){
          setPokemonIndex(pokemonIndex + 1);
      }
  };

  return ( 
  <div>
    <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    
    <NavBar 
    clickPrecedent = {pokemonPrecedent}
    clickSuivant = {pokemonSuivant}
    />
  </div>
  );
}

export default App;