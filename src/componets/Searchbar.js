import {useState} from "react"

function Searchbar () {
    const [search, setSearch] = useState ("Ditto");

    const onChangeHandler = (e) => {
        console.log("Pokemon:", e.target.value);
        setSearch(e.target.value);
    }

    const onButtonHandler = () => {
        console.log("Pokemon: ", search);
    }

    return(
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler}/>
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonHandler}>Buscar</button>
            </div>
        </div>
    )
}

export default Searchbar;