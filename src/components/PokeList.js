import React from "react";
import Pokemon from "./Pokemon";

function PokeList(props) {
  //console.log(props); //Nos devuelve el array data
  const pokemonsItems = props.list.map((item, id) => {
    return (
      <li key={item.id}>
        <Pokemon item={item} />
      </li>
    );
  });

  return <ul>{pokemonsItems}</ul>;
}
export default PokeList;
