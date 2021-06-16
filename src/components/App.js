import React, { useState } from "react";
import PokeList from "./PokeList";
import data from "../data/data.json";
import "../stylesheets/App.css";

function App() {
  const [pokemons] = useState(data);

  return (
    <>
      <h1>Mi lista de Pokemon</h1>
      <PokeList list={pokemons} />
    </>
  );
}

export default App;
