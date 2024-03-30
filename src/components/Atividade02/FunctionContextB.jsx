import { useContext } from "react";
import ColorTheme from "./MyColorContext";

const FunctionContextB = () => {

    const contexto = useContext(ColorTheme);

    return (
        <ColorTheme.Consumer>
            {
                (value) => {
                    return (
                        <div>
                            <h1 style={{backgroundColor : contexto.bkgB}}>
                                Contexto B
                            </h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>
    )
}

export default FunctionContextB;
