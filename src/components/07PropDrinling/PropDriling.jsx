const CompA = () => {

    const variavelA = "variavel de a"
    return (
        <div>
            <CompB variavelA={variavelA} />
            <CompC variavelA={variavelA}/>
        </div>
    )
}

const CompB = ({variavelA}) => {

    return (
        <div>
            <h3>{variavelA}</h3>
        </div>
    )
}

const CompC = ({variavelA}) => {

    return (
        <div>
            <CompD variavelA={variavelA}/>

        </div>
    )
}

const CompD = ({variavelA}) => {

    return (
        <div>
            <h3>{variavelA}</h3>
        </div>
    )
}

export {CompA, CompB, CompC, CompD}
