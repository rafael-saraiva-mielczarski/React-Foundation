import React from 'react'

//destruturação das props, deixa o código mais limpo e reduzido
const CarDetails = ({marca, kilometragem, cor}) => {

  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {marca}</li>
            <li>Kilometragem: {kilometragem}</li>
            <li>Cor: {cor}</li>
        </ul>
    </div>
  )
}

export default CarDetails