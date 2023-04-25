import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import PokemonFetch from "./components/PokemonFetch";
import PokemonList from "./components/PokemonList";
import PokemonDisplay from "./components/PokemonDisplay";
import AboutDisplay from "./views/AboutDisplay";
import dmgBgOn from "./assets/dmg-bg.png";
import dmgBgOff from "./assets/dmg-bg-off.png";
import bgMusic from "./assets/pallet-town-theme.mp3";
import nintendoLogo from "./assets/nintendo-logo.png";
import startupSound from "./assets/nintendo-startup.mp3";

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
  const nintendoStartSound = new Audio(startupSound);
  backgroundMusic.volume = 0.1;
  nintendoStartSound.volume = 0.1;
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
  };

  const nintendoStartup = () => {
    setLoadContent(true);
    document.getElementById("startup-bg").style.display = "none";
    document.getElementById("go-back-button").style.display = "block";
    playBgMusic();
  };

  // useEffect(() => {

  // }, []);

  const turnGameboyOn = () => {
    setIsClicked(true);
    document.getElementById("on-button").style.display = "none";
    document.getElementById("screen-dark").style.display = "none";
    document.getElementById("dmg-img-off").style.display = "none";
    document.getElementById("startup-bg").style.display = "block";
    document.getElementById("dmg-img-on").style.display = "block";
    setTimeout(playNintendoSound, 2450);
    setTimeout(nintendoStartup, 4200);
    document.getElementById("nintendo-animation").style.display = "block";
  };

  return (
    <div className="text-center mt-3 m-auto">
      <div className="noise-image"></div>
      <h1 id="on-button" onClick={turnGameboyOn}>
        Click here to turn on Gameboy
      </h1>
      <div id="screen-dark"></div>
      <div className="dmg-bg">
        <div className="mb-3 pokemon-fetch-button" id="go-back-button">
          <PokemonFetch
            setPokemonArr={setPokemonArr}
            pokemonArr={pokemonArr}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
        </div>
        <img src={dmgBgOff} alt="DMG" id="dmg-img-off" />
        <img src={dmgBgOn} alt="DMG" id="dmg-img-on" />
        <div id="startup-bg"></div>
        <div className="glass-illusion"></div>
        <img
          src={nintendoLogo}
          alt="Nintendo Logo"
          className="nintendo-logo"
          id="nintendo-animation"
        />
        {loadContent && (
          <div className="pokemon-box m-auto col-11">
            <Routes>
              <Route path="/" element={<Navigate to="/nostalgia-red/" />} />
              <Route
                path="/nostalgia-red/"
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
                path="/nostalgia-red/:id"
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
              <Route path="/nostalgia-red/about" element={<AboutDisplay />} />
            </Routes>
          </div>
        )}
        <div id="background-green"></div>
        {/* <div id="background-gray"></div> */}
      </div>
    </div>
  );
}

export default App;
