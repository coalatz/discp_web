const Produto = ({nome, categoria,preco}) => {
	return (
		<div>
			<h3>Nome: {nome }</h3>
			<h3>Categoria: {categoria} </h3>
			<h3>Preco: R$ {preco}</h3>
		</div>
	)
}

export default Produto
