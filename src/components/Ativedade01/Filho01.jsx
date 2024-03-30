const Filho01 = ({altura, peso}) => {

    function mensagemImc(altura, peso) {
        let imc = peso/(altura * altura)
        if(imc < 18) {
            return <h3>abaixo do peso</h3>
        }
        else if(imc > 25) {
            return <h3> acima do peso </h3>
        }
        else {
            return <h3> peso ideal </h3>
        }
    }

    return (
        <div>

          <h3>seu imc e: {peso/(altura * altura)}</h3>
           <h3>{mensagemImc(altura, peso)} </h3>
        </div>
    )
}

export default Filho01