import { useEffect, useState } from 'react';
import { getPokemonData, getPokemons } from './Api';
import './App.css';
import Navbar from './componets/Navbar';
import Pokedex from './componets/Pokedex';
import Searchbar from './componets/Searchbar';
import { FavoriteProvider } from './contexts/favoritesContext';

function App() {

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([])

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
  };

  useEffect(() => {
    console.log("Carregou")
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) =>{
    const updateFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if(favoriteIndex >= 0) {
      updateFavorites.slice(favoriteIndex, 1);
    }else {
      updateFavorites.push(name);
    }
    setFavorites(updateFavorites);
  }

  return (
    <FavoriteProvider value={{ favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemons, }}>
      <div className="App">
        <Navbar />
        <Searchbar />
        <Pokedex pokemons={pokemons} loading={loading} page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </FavoriteProvider>
  );
}

export default App;
