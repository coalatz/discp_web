import { useState } from "react"

const Pokemon = () => {

    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const [contador, setContador] = useState(1)

    const incrementarCont = () => {
        setContador((a) => a + 1)
    }
    
    const decrementarCont = () => {
        if(contador >= 2 ) {
            setContador((a) => a - 1)
        }
        else {
            setContador((a) => a = 1)
        }
    }

    return (
        <div>
            <h3>N pokemon: {contador} </h3>
            <img 
                src ={url + contador + ".png"}
                alt="nao deu mano "
                width={170}
            />
            <button 
                onClick={() => incrementarCont()}
            >
                proximo pokemon
            </button>
            <button 
                onClick={() => decrementarCont()}
            >
                pokemon anterior
            </button>
        </div>
    ) 
}

export default Pokemon