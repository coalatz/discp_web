import { useState } from "react";

const Estado = () => {

    //let contador = 0
    let [contador, setContador] = useState(0)

    const incrementarContador = () => {
        setContador((a) => a + 1 )
    }
    const decrementarContador = () => {
        setContador((a) => a - 1)
    }

    return (
        <div>
            <h2> Contador: {contador}</h2>
            <button
                onClick={() => incrementarContador()}
            >
                incrementar contador!
            </button>
            <button 
                onClick={() => decrementarContador()}
            >
                decrementar contador??
            </button>
        </div>
    )
}

export default Estado