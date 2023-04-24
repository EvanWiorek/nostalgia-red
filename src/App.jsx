import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import PokemonFetch from "./components/PokemonFetch";
import PokemonList from "./components/PokemonList";
import PokemonDisplay from "./components/PokemonDisplay";
import AboutDisplay from "./views/AboutDisplay";
import dmgBg from "./assets/dmg-bg.png";
import bgMusic from "./assets/pallet-town-theme.mp3";
import nintendoLogo from "./assets/nintendo-logo.png"
import startupSound from "./assets/nintendo-startup.mp3"

function App() {
  const [pokemonArr, setPokemonArr] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [pokemonId, setPokemonId] = useState();
  const [speciesLink, setSpeciesLink] = useState();
  const [loadContent, setLoadContent] = useState(false);

  //sound manipulation
  const backgroundMusic = new Audio(bgMusic);
  const [bgMusicStatus, setBgMusicStatus] = useState(false);
  const nintendoStartSound = new Audio(startupSound)
  backgroundMusic.volume = 0.1;
  nintendoStartSound.volume = 0.1
  const bgRef = useRef(backgroundMusic);

  const playBgMusic = () => {
    bgRef.current.play();
    bgRef.current.loop = true;
    setBgMusicStatus(true);
  };

  const pauseBgMusic = () => {
    bgRef.current.pause();
    setBgMusicStatus(false);
  };

  const playNintendoSound = () => {
    nintendoStartSound.play();
  }

  useEffect(() => {
    setTimeout(playNintendoSound, 2700);
    setTimeout(nintendoStartup, 4150);
    
  }, []);

  // setTimeout(setLoadContent(true), 10);
  const nintendoStartup = () => {
    setLoadContent(true)
  }

  return (
    <div className="text-center mt-3 m-auto">
      <div className="noise-image"></div>
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
        <div className="glass-illusion"></div>
        {/* <div className="nintendo-logo">Nintendo</div> */}
        <img src={nintendoLogo} alt="Nintendo Logo" className="nintendo-logo"/>
        {loadContent && (
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
                    playBgMusic={playBgMusic}
                    pauseBgMusic={pauseBgMusic}
                    bgMusicStatus={bgMusicStatus}
                    setBgMusicStatus={setBgMusicStatus}
                  />
                }
              />
              <Route
                path="/pokemon/:id"
                element={
                  loaded && (
                    <PokemonDisplay
                      pokemon={pokemon}
                      pokemonId={pokemonId}
                      speciesLink={speciesLink}
                    />
                  )
                }
              />
              <Route path="/about" element={<AboutDisplay />} />
            </Routes>
          </div>
        )}
        <div className="background-green"></div>
      </div>
    </div>
  );
}

export default App;
