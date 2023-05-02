import React from "react";
import Card from "./Card";
import "./CardGrid.css";

const CardGrid = ({ pokemons, handleClick }) => {
  const cards = pokemons.map((pokemon) => (
    <Card key={pokemon.id} pokemon={pokemon} handleClick={handleClick} />
  ));

  return <div className="card-grid">{cards}</div>;
};

export default CardGrid;
