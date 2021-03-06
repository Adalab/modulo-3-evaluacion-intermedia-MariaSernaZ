import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/App.css";

function PokeList(props) {
  const pokemonsItems = props.list.map((itemPokemon) => {
    return (
      <li key={itemPokemon.id}>
        <Pokemon item={itemPokemon} />
      </li>
    );
  });

  return <ul className="list">{pokemonsItems}</ul>;
}
export default PokeList;
