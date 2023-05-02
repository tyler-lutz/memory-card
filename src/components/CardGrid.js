import React from "react";
import Card from "./Card";

const CardGrid = ({ pokemons }) => {
  const cards = pokemons.map((pokemon) => (
    <Card key={pokemon.id} pokemon={pokemon} />
  ));

  return <div>{cards}</div>;
};

export default CardGrid;
