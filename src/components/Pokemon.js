import React from "react";

function Pokemon(props) {
  const renderTypes = () => {
    //console.log(props.item.types); //Nos devuelve array con los types
    return props.item.types.map((type) => {
      return <li key={type.id}>{type}</li>;
    });
  };
  return (
    <article>
      <img src={props.item.url} alt={props.item.name} />
      <h3>{props.item.name}</h3>
      <ul>{renderTypes()}</ul>
    </article>
  );
}
export default Pokemon;
