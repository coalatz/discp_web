
import { useContext } from "react"
import ColorTheme from "./MyColorContext"

const FunctionContextD = () => {

    const contexto = useContext(ColorTheme)

    return (
        <ColorTheme.Consumer>
            {
                (value) => {
                    return (
                        <div>
                            <h1 style={{ background: contexto.bkgD }}>
                                Contexto D
                            </h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextD