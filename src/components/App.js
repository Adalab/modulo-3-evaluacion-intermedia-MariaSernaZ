import PokeList from "./PokeList";
import data from "../data/data.json";
import "../stylesheets/App.css";

function App() {
  return (
    <>
      <h1>Mi lista de Pokemon</h1>
      <PokeList list={data} />
    </>
  );
}

export default App;
