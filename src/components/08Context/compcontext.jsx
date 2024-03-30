import { useContext } from "react"
import { VariavelA } from "./MeuContexto"

const CompA = () => {

    return (
        <div>
            <VariavelA.Provider value ="Variavel de a">
            <CompB />
            <CompC />
            </VariavelA.Provider>
        </div>
    )
}

const CompB = () => {

    const contexto = useContext(VariavelA)

    return (
        <div>
            <h3>{contexto}</h3>
        </div>
    )
}

const CompC = () => {

    return (
        <div>
            <CompD />
        </div>
    )
}

const CompD = () => {

    const contexto = useContext(VariavelA)

    return (
        <div>
            <h2>{contexto}</h2>
        </div>
    )
}

export {CompA, CompB, CompC, CompD}
