import SistemaSolar from "./SistemaSolar"
import Planeta from "./Planeta"

const Galaxia = ({ nome }) => {
    return (
        <div>
            <h1> Galaxia {nome}</h1>
            <SistemaSolar galaxia = "Via Lactea">
            <Planeta 
            nome = "Mercuriu"
            tipo = "Rochoso"
            ordem = "1"
            />
            <hr />
            <Planeta 
            nome = "Venus"
            tipo = "Rochoso"
            ordem = "2"
            />
            <hr />
            <Planeta 
            nome = "Terra"
            tipo = "Rochoso"
            ordem = "3"
            />
            <hr />
            <Planeta 
            nome = "Marte"
            tipo = "Rochoso"
            ordem = "4"
            />
            <hr />
            <Planeta 
            nome = "Jupter"
            tipo = "Gasoso"
            ordem = "5"
            />
            <hr />
            <Planeta 
            nome = "Saturno"
            tipo = "Gasoso"
            ordem = "5"
            />
            <hr />
            <Planeta 
            nome = "Urano"
            tipo = "Gasoso"
            ordem = "6"
            />
            </SistemaSolar>
        </div>
    )
}

export default Galaxia
