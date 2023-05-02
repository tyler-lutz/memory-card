import React from "react";
import "./Card.css";

const Card = ({ pokemon, handleClick }) => {
  return (
    <div className="card" onClick={handleClick}>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
};

export default Card;
