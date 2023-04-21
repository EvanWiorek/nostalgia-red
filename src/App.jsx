import { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import PokemonFetch from "./components/PokemonFetch";
import PokemonList from "./components/PokemonList";
import PokemonDisplay from "./components/PokemonDisplay";
import AboutDisplay from "./views/AboutDisplay";
import dmgBg from './assets/dmg-bg.png'

function App() {
  const [pokemonArr, setPokemonArr] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [pokemonId, setPokemonId] = useState();
  const [speciesLink, setSpeciesLink] = useState();

  return (
    <div className="text-center mt-3 m-auto">
      <div class="noise-image"></div>
      <div className="mb-3 pokemon-fetch-button">
        <PokemonFetch
          setPokemonArr={setPokemonArr}
          pokemonArr={pokemonArr}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
      </div>
      <div className="dmg-bg">
        <img src={dmgBg} alt="DMG" className="dmg-img" />
        <div className="glass-illusion" ></div>
        <div className="pokemon-box m-auto col-11">
          <Routes>
            <Route path="/" element={<Navigate to="/pokemon" />} />
            <Route
              path="/pokemon"
              element={
                <PokemonList
                  pokemonArr={pokemonArr}
                  pokemon={pokemon}
                  setPokemon={setPokemon}
                  setLoaded={setLoaded}
                  setPokemonId={setPokemonId}
                  speciesLink={speciesLink}
                  setSpeciesLink={setSpeciesLink}
                />
              }
            />
            <Route
              path="/pokemon/:id"
              element={
                loaded && (
                  <PokemonDisplay pokemon={pokemon} pokemonId={pokemonId} speciesLink={speciesLink} />
                )
              }
            />
            <Route path="/about" element={<AboutDisplay />} />
          </Routes>
        </div>
        <div className="background-green"></div>
      </div>
    </div>
  );
}

export default App;
