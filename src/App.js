import React, { useEffect, useState } from "react";
import CardGrid from "./components/CardGrid";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const loadPokemons = async () => {
      setPokemons(await fetchPokemons(12));
    };

    loadPokemons();
  }, []);

  const fetchPokemons = async (amount) => {
    const pokemons = [];

    for (let i = 0; i < amount; i++) {
      const random = Math.floor(Math.random() * 151) + 1;
      const url = `https://pokeapi.co/api/v2/pokemon/${random}`;
      const response = await fetch(url);
      const data = await response.json();
      const id = data.id;
      const name = data.name;
      const image = data.sprites.front_default;
      if (pokemons.find((pokemon) => pokemon.id === id)) {
        i--;
        continue;
      }
      pokemons.push({ id, name, image });
    }

    return pokemons;
  };

  const reset = () => {
    setClickedPokemons([]);
    setScore(0);
  };

  const playRound = (pokemonName) => {
    if (clickedPokemons.includes(pokemonName)) {
      reset();
    } else {
      const newScore = score + 1;
      if (newScore > bestScore) setBestScore(newScore);
      setScore(newScore);
      setClickedPokemons((prevState) => [...prevState, pokemonName]);
    }
  };

  const handleClick = (e) => {
    const pokemonName = e.target.parentNode.lastChild.textContent;
    playRound(pokemonName);
    setPokemons(shuffleArray(pokemons));
    console.log(score);
  };

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <CardGrid pokemons={pokemons} handleClick={handleClick} />
    </div>
  );
};

export default App;
