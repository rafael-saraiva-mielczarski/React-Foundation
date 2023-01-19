const ExecuteFunction = ({alertMsg}) => {
  return (
    <div>
        <h1>Executando a func no filho</h1>
        <button onClick={alertMsg}>Clique para ver a func</button>
    </div>
  )
}

export default ExecuteFunction