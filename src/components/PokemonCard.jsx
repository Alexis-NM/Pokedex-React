import React from "react";
import PropTypes from "prop-types";

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



function PokemonCard(props) {   
    const { pokemon } = props;
    return(
        <figure>
    {pokemon.imgSrc ? 
    (<img src = {pokemon.imgSrc} alt={pokemon.name} />) 
    : (<p>???</p>)}
    <figcaption>{pokemon.name}</figcaption>
    </figure>
    );
}
PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    }).isRequired,
  }


  export default PokemonCard