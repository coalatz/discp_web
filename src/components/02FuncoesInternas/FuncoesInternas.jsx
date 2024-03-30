const FuncoesInternas = () => {
	let numero1 = 103
	let numero3 = 5

	function somar(x, y) {
		return x + y
	}

	const subtarir = (x, y) => {
		return x - y
	}

	const divisao = (x, y) => x / y

	const multiplicacao = (x, y) => x * y

	return (
		<div>
			<h1>Calculadora</h1>
			<h3>O resultado da soma e: {somar(numero1, numero3)} </h3>
			<h3>O resultado da subtracao e: {subtarir(numero1, numero3)} </h3>
			<h3>
				O resultado da divisao e: {divisao(numero1, numero3).toFixed(2)}{' '}
			</h3>
			<h3>
				O resultado da multiplicacao e:{' '}
				{multiplicacao(numero1, numero3)}{' '}
			</h3>
		</div>
	)
}

export default FuncoesInternas
