import {useEffect, useState} from 'react';
import { getPokemons } from './Api';
import './App.css';
import Navbar from './componets/Navbar';
import Pokedex from './componets/Pokedex';
import Searchbar from './componets/Searchbar';

function App() {

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const result = await getPokemons();
      setPokemons(result)
      setLoading(false)
    } catch (error) {
      console.log("fetchPokemos error ", error);
    }  
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
