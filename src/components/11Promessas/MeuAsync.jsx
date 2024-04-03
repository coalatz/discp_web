
import { useEffect, useState } from "react"

const minhaPromessa = new Promise(
    (resolve, rejected) => {
        //computacao de x segundos
        setTimeout(
            () => {
                //console.log("fui executado")
                const meuNum = Math.floor(Math.random() *10) +1
                if(meuNum %2 === 0) {
                    resolve("deu certo " + meuNum)
                } else {
                    rejected("nao deu certo " + meuNum)
                }
            }
            ,
            3000
        )
    }
)

const ComponentePromessa = () => {

    const [resultado, setResult] = useState("")

    async function apiGetPromessa() {
        //se comunica com alguem remoto
        try {
            const res = await minhaPromessa
            setResult(res)
        }catch(error) {
            setResult(error)
        }
        return minhaPromessa
    }

    useEffect(
        () => {
            apiGetPromessa()
        }
        ,
        []
    )

    return (
        <>
            <h3>promessa com async </h3>
            <h4>resultado: {resultado}</h4>
        </>
    )
}

export default ComponentePromessa