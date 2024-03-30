//import Planeta from "./Planeta"
import React from "react"

const SistemaSolar = ({children, galaxia}) => {
    return (
        <div>
            <h2> Sistema Solar da Galaxia {galaxia}</h2>
            {React.Children.map(
                children,
                (x) => {
                   return React.cloneElement(x,{galaxia})
                }
            )}
        </div>
    )
}

export default SistemaSolar