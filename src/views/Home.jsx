import { useState } from "react";
import PokemonFetch from "../components/PokemonFetch Loaded";
import PokemonList from "../components/PokemonList";

export default (props) => {
  const [loaded, setLoaded] = useState(false);
  const [pokemonArr, setPokemonArr] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <PokemonFetch setPokemonArr={setPokemonArr} pokemonArr={pokemonArr} isClicked={isClicked} setIsClicked={setIsClicked} loaded={loaded} setLoaded={setLoaded} />
      <hr />
      {loaded && <PokemonList pokemonArr={pokemonArr} pokemon={pokemon} setPokemon={setPokemon} />}
    </div>
  )
}