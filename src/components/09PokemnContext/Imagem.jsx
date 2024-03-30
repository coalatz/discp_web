import { useContext } from "react"
import { PokemonContexto } from "./PokemonContexto" 
import Decrementar from "./Decrementar"
import Incrementar from "./Incrementar"


const Imagem = () => {

    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const {id} = useContext(PokemonContexto)

    return (
        <div>
            <img 
                src = {url + id + ".png"}
                alt = "Pokemon"
                width = {170}
            />
            <Decrementar />
            <Incrementar />
        </div>
    )
}

export default Imagem 