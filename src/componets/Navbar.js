const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

function Navbar () {
    return(
        <nav>
            <div>
                <img className="nav-img" alt="pokeapi-logo" src={logoImg}/>
            </div>
        </nav>
    )
}

export default Navbar;