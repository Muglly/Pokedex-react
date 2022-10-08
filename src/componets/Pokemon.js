

const Pokemon = (props) => {
    const {pokemon} = props;
    const onHeartClick = () => {
        console.log("pode favoritar")
    }
    const heart = "❤"
    return (
        <div className="pokemon-card">
            <div className="pokemon-image-container">
                <img className="pokemon-image" alt={pokemon.name} src={pokemon.sprites.front_default}/>
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                {/* types é uma array eprecisa ser estruturado dessa forma */}
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key={index} className="pokemon-type-text">{type.type.name}</div>
                            )
                        })}
                    </div>
                    <button className="pokemon-heart-btn" onClick={onHeartClick}>
                        {heart}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;