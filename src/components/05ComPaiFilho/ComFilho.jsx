const ComFilho = ({mensagem, enviarMensagemPai}) => {
    return (
        <div>
            <h2> Mensagem do Pai: {mensagem} </h2>
            <button
                onClick={()=>enviarMensagemPai("OIIII PAI ->_<-")}
            >
                Enviar Mensagem Para o Pai
            </button>
        </div>
    )
}

export default ComFilho
