import React, { useEffect, useState } from "react";
import CardGrid from "./components/CardGrid";
import "./App.css";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
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

    for (let i = 0; i <= amount; i++) {
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

  return (
    <div className="App">
      <CardGrid pokemons={pokemons} />
    </div>
  );
};

export default App;
