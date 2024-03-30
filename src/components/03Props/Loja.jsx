import Produto from './Produto'

const Loja = () => {
	return (
		<div>
			<h1>Supermecado Quixada</h1>
			<hr />
			<Produto
				nome="Maquina de Lavar"
				categoria="Eletronico"
				preco={1000.0}
			/>
			<hr />
			<Produto 
			nome="Iphone 12" 
			categoria="Celular" 
			preco={2900.6} 
			/>
			<hr />
			<Produto
				nome="gtx 2060 super"
				categoria="placa de video"
				preco={10.0}
			/>
		</div>
	)
}

export default Loja
