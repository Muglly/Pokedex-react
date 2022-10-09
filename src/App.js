import { useEffect, useState } from 'react';
import { getPokemonData, getPokemons } from './Api';
import './App.css';
import Navbar from './componets/Navbar';
import Pokedex from './componets/Pokedex';
import Searchbar from './componets/Searchbar';

function App() {

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const itensPerPage = 27;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const result = await Promise.all(promises);
      setPokemons(result);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemos error ", error);
    }
  }

  useEffect(() => {
    console.log("Carregou")
    fetchPokemons();
  }, [page])

  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading} page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
}

export default App;
