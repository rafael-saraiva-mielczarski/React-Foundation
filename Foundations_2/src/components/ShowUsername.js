import React from 'react'

const ShowUsername = (props) => {
  return (
    <div>
        <h1>Props</h1>
        {/* Como passar dados de componentes pais para filhos */}
        <p>O nome do usuario é: {props.name}</p>
    </div>
  )
}

export default ShowUsername