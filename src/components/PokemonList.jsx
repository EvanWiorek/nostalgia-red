import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import pokeball from "../assets/pokeball.png";
import clickSound from "../assets/click-sound.wav";
import crySound1 from "../assets/cry-sound1.wav";

export default ({
  pokemonArr,
  setPokemon,
  setLoaded,
  setPokemonId,
  speciesLink,
  setSpeciesLink,
  playBgMusic,
  pauseBgMusic,
  bgMusicStatus,
  setBgMusicStatus,
}) => {
  const clickSoundLoaded = new Audio(clickSound);
  clickSoundLoaded.volume = 0.05;

  const playClickSound = () => {
    clickSoundLoaded.play();
  };

  const pokemonClick = (pokemonUrl) => {
    playClickSound();
    axios.get(`${pokemonUrl}`).then((response) => {
      if (parseInt(response.data.id) < 10) {
        setPokemonId(`00${response.data.id}`);
      } else if (
        parseInt(response.data.id) > 9 &&
        parseInt(response.data.id) < 100
      ) {
        setPokemonId(`0${response.data.id}`);
      } else if (parseInt(response.data.id) > 99) {
        setPokemonId(`${response.data.id}`);
      }
      setPokemon(response.data);
      return axios.get(`${response.data.species.url}`).then((response) => {
        setSpeciesLink(response.data);
        setLoaded(true);
      });
    });
  };

  return (
    <div className="test-container">
      <div className="list-sticky-parts">
        <div className="top-border"></div>
        <div className="right-vertical-line"></div>
        <div className="thin-line"></div>
        <div className="thick-line"></div>
        <div className="box1 tiny-box">
          <div className="tiny-box-top-vertical"></div>
          <div className="tiny-box-bottom-vertical"></div>
        </div>
        <div className="box2 tiny-box">
          <div className="tiny-box-top-vertical"></div>
          <div className="tiny-box-bottom-vertical"></div>
        </div>
        <div className="box3 tiny-box">
          <div className="tiny-box-top-vertical"></div>
          <div className="tiny-box-bottom-vertical"></div>
        </div>
        <div className="box4 tiny-box">
          <div className="tiny-box-top-vertical"></div>
          <div className="tiny-box-bottom-vertical"></div>
        </div>
        <div className="box5 tiny-box">
          <div className="tiny-box-top-vertical"></div>
          <div className="tiny-box-bottom-vertical"></div>
        </div>
        <div className="box6 tiny-box">
          <div className="tiny-box-top-vertical"></div>
          <div className="tiny-box-bottom-vertical"></div>
        </div>
        <div className="box7 tiny-box">
          <div className="tiny-box-top-vertical"></div>
          <div className="tiny-box-bottom-vertical"></div>
        </div>
        <div className="box8 tiny-box">
          <div className="tiny-box-top-vertical"></div>
          <div className="tiny-box-bottom-vertical"></div>
        </div>
        <p className="contents">CONTENTS</p>
        <div className="seen">
          <p>SEEN</p>
          <p>151</p>
        </div>
        <div className="own">
          <p>OWN</p>
          <p>151</p>
        </div>
        <div className="music">
          <p>MUSIC</p>
          <div className="music-on-off">
            {bgMusicStatus ? (
              <p onClick={pauseBgMusic}>OFF</p>
            ) : (
              <p onClick={playBgMusic}>ON</p>
            )}
          </div>
        </div>
        <Link to={`/about`} onClick={playClickSound}>
          <p className="about-link">ABOUT</p>
        </Link>
      </div>
      <div className="pokemon-list-container">
        <div className="pokemon-list">
          {pokemonArr.map((pokemon, idx) => {
            if (idx + 1 < 10) {
              return (
                <>
                  <Link
                    key={idx}
                    to={`/pokemon/${idx + 1}`}
                    onClick={() => pokemonClick(pokemon.url)}
                  >
                    <div className="link-container">
                      <div className="listed-link">
                        <p>{"00" + (idx + 1)}</p>
                        <div className="d-flex">
                          <img
                            src={pokeball}
                            alt="pokeball"
                            className="pokeball"
                          />
                          <p className="listed-name">
                            {pokemon.name.toUpperCase()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              );
            } else if (idx + 1 > 9 && idx + 1 < 99) {
              return (
                <>
                  <Link
                    key={idx}
                    to={`/pokemon/${idx + 1}`}
                    onClick={() => pokemonClick(pokemon.url)}
                  >
                    <div className="link-container">
                      <div className="listed-link">
                        <p>{"0" + (idx + 1)}</p>
                        <div className="d-flex">
                          <img
                            src={pokeball}
                            alt="pokeball"
                            className="pokeball"
                          />
                          <p className="listed-name">
                            {pokemon.name.toUpperCase()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              );
            } else {
              return (
                <>
                  <Link
                    key={idx}
                    to={`/pokemon/${idx + 1}`}
                    onClick={() => pokemonClick(pokemon.url)}
                  >
                    <div className="link-container">
                      <div className="listed-link">
                        <p>{idx + 1}</p>
                        <div className="d-flex">
                          <img
                            src={pokeball}
                            alt="pokeball"
                            className="pokeball"
                          />
                          <p className="listed-name">
                            {pokemon.name.toUpperCase()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
