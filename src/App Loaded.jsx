import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";
import PokemonDisplay from "./views/PokemonDisplay";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/pokemon" />}/>
        <Route path="/pokemon" element={<Home/>}/>
        <Route path="/pokemon/:pokemonUrl" element={<PokemonDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
