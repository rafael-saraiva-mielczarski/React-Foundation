import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Rafael", "Roberta", "Thales"])

    const [usuarios] = useState(
        [
            {id: 1, name: "Rafael", idade: 22},
            {id: 2, name: "Roberta", idade: 24},
            {id: 3, name: "Thales", idade: 25},
        ]
    )

    const deleteRandomUser = () => {
        
    }

    return (
        <div>
            <ul>
                {/* geralmente map é feito com {} para modificar algum dado no meio de uma logica, mas para retornar algum objeto no map se usa () */}
                {list.map((nome, index) => (
                    //todo elemento que usamos map necessita de um identificador(key), pode ser um id ou até o index
                    <li key={index}>{nome}</li>
                ))}
            </ul>
            <hr />
            {/* esse segundo exemplo é mais realista, pegando os dados de objetos com ids auto incrementais de um DB */}
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}> {usuario.name} - {usuario.idade} </li>
                ))}
            </ul>
            <button onClick={deleteRandomUser}>Delete Random User</button>
        </div>
  
    )
}

export default ListRender