
import { useContext,useState } from 'react'
import { Numero } from './ContPoke'

const CompPai = () => {

    const img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const v2 = useContext(Numero)

    const [num,setNum] = useState(v2)
    

    return (
        <div>
            <h1>Filho</h1>
            <button 
                onClick={() => setNum(num +3)}
            >
                Encrementar
            </button>

            <button 
                onClick={() => setNum(num -3)}
            >
                Decrementar
            </button>

            <img src = {img + num  + ".png"}
            alt="nao deu mano "
            width={170}
            />
            <hr />
        </div>
    )
}

export default CompPai
