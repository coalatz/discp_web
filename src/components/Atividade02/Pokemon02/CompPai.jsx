import { useContext, useState } from 'react'
import { Numero } from './ContPoke'

const CompPai = () => {

    const img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
 
    const v1 = useContext(Numero)
    
   const[num,setNum] = useState(v1)

    

    return (

        
        <div>
            <h1>Pai</h1>
            <button onClick=
                {() => setNum(num => num +2)}>
                Incrementar
            </button>

            <button 
                onClick={() => setNum(num -2)}
            >
                Decrementar
            </button>

            <img src = {img + num + ".png"}
            alt="nao deu mano "
            width={170}
            />
            <hr />
            

        </div>
    )
}

export default CompPai
