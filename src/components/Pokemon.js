import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/App.css";

function Pokemon(props) {
  const renderTypes = () => {
    return props.item.types.map((type, index) => {
      return <li key={index}>{type}</li>;
    });
  };
  return (
    <article className="pokeCard">
      <img src={props.item.url} alt={props.item.name} />
      <h3>{props.item.name}</h3>
      <ul>{renderTypes()}</ul>
    </article>
  );
}

export default Pokemon;

Pokemon.propTypes = {
  pokemon: PropTypes.object,
};
