import { useContext } from "react";
import FunctionContextB from "./FunctionContextB";
import FunctionContextC from "./FunctionContextC";

import ColorTheme from "./MyColorContext";

const FunctionContextA = () => {
    const cores = {bkgA:"red",bkgB:"white",bkgC:"yellow", bkgD:"blue"};

    return (
        <ColorTheme.Provider value={cores}>
            <FunctionContextB />
            <FunctionContextC />
            <ColorTheme.Consumer>
                  {contexto => <h1 
                  style={{backgroundColor: contexto.bkgA}}>
                  Contexto A </h1>}
            </ColorTheme.Consumer>
        </ColorTheme.Provider>
    );
}

export default FunctionContextA;
