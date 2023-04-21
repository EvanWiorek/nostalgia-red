import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default ({ setPokemonArr, isClicked, setIsClicked}) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClicked(true);
    navigate(`/pokemon`)
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
      <input type="submit" className="btn btn-warning" value="Pokemon List" />
    </form>
    </>
  )
};
