import { useState, useEffect } from "react"

const Efeito = () => {

    const [getCont, setCont] = useState(0)
    const [ehPar, setEhpar] = useState(true) 

    useEffect(
        () => {
            if(getCont %2 === 0 ){ setEhpar(true) }
            else { setEhpar(false) }
        }
        ,
        [getCont] 
    )

    return (
        <div>
            <h3> Contador: {getCont}</h3>
            <h3>E par? {ehPar + ""}</h3>
            <button
            onClick={() => setCont(anterior => anterior +1)}
            >
                Aumentar
            </button>
            <button
            onClick={() => setCont(diminuir => diminuir -1)}
            >
                Diminuir
            </button>
        </div>
    )
}

export default Efeito