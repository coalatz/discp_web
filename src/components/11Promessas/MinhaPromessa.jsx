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
            5000
        )
    }
)

const ComponentePromessa = () => {

    const [resultado, setResult] = useState("")

    useEffect(
        () => {
            minhaPromessa
            .then(
                (valor) => {
                    setResult(valor)
                } 
            )
            .catch(
                (error) => setResult(error)
            )
        }
        ,
        []
    )

    return (
        <>
            <h3>promessa </h3>
            <h4>resultado: {resultado}</h4>
        </>
    )
}

export default ComponentePromessa