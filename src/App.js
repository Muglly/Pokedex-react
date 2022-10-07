import {useEffect, useState} from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import Pokedex from './componets/Pokedex';
import Searchbar from './componets/Searchbar';

function App() {

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    setLoading(true);
  }

  useEffect ( () => {
    console.log("Carregou")
    fetchPokemons();
  },[])

  return (
    <div className="App">
      <Navbar/>
      <Searchbar/>
      <Pokedex/>
    </div>
  );
}

export default App;
