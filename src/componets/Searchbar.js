import {useState} from "react"
import {searchPokemon} from  "../Api" 

function Searchbar () {
    const [search, setSearch] = useState ("Ditto");
    const [pokemon, setPokemon] = useState ();

    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    const onButtonHandler = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon);
        setPokemon(result);
      }

    return(
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler}/>
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonHandler}>Buscar</button>
            </div>
            {pokemon ? (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                </div>
            ) : null}
        </div>
    )
}

export default Searchbar;