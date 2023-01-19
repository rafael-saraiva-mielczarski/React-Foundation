const ChangeMessageState = ({ handleMessageChange }) => {
    const messages = ["Fazendo State Lift", "Trocando a mensagem", "Mensagem trocada"]
  
    return (
        <div>
            <p>Trocando o estado da mensagem</p>
            <button onClick={() => (handleMessageChange(messages[0]))}>1</button>
            <button onClick={() => (handleMessageChange(messages[1]))}>2</button>
            <button onClick={() => (handleMessageChange(messages[2]))}>3</button>
        </div>
    )
}

export default ChangeMessageState