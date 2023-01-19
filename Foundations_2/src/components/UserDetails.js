const UserDetails = ( { id, nome, idade, sexo }) => {
  return (
    <div>
        <h2>Detalhes do Usuario - Teste</h2>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            {idade >= 18 ? <p>Pode tirar carteira</p> : <p>Menor de idade</p> }
            <li>Sexo: {sexo}</li>
        </ul>
    </div>
  )
}

export default UserDetails