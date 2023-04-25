import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import clickSound from "../assets/click-sound.wav";

export default ({ setPokemonArr, isClicked, setIsClicked}) => {
  const navigate = useNavigate();

  const clickSoundLoaded = new Audio(clickSound);
  clickSoundLoaded.volume = 0.05;

  const playClickSound = () => {
    clickSoundLoaded.play();
  };

  const handleSubmit = (e) => {
    playClickSound();
    e.preventDefault();
    setIsClicked(true);
    navigate(`/nostalgia-red/`)
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then((response) => {
        setPokemonArr(response.data.results);
      })
      .catch((err) => console.log(err));
    setIsClicked(false);
  }, [isClicked]);

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="submit" className='fetch-button' value="GO BACK" />
    </form>
    </>
  )
};
