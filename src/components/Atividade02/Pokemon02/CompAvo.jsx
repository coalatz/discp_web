import { useContext, useState } from 'react'
import { Numero } from './ContPoke'
import CompPai from './CompPai'
import CompFilho from './CompFilho'

const CompAvo = () => {

    const img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const v11 = useContext(Numero)

    const [num, setNum] = useState(v11)

    return (
        <div>
            <h1>avo</h1>
            <Numero.Provider value={1}>
                <button onClick={() => setNum(num + 1)}>
                    Incrementar
                </button>

                <button onClick={() => setNum(num - 1)}>
                    Decrementar
                </button>

                <img 
                src={img + num + ".png"} 
                alt="nao deu" 
                width={170} />
                <hr />

                <CompPai />
                <CompFilho />
            </Numero.Provider>
        </div>
    )
}

export default CompAvo
