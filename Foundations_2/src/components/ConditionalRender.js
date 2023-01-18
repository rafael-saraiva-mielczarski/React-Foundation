import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(true);
    const [name, setName] = useState("Rafael")

    return (
        <div>Conditional Rendering
            <h1>O x vai aparecer?</h1>
            {/* {x && <p>Se x for verdadeiro sim</p>}
            {!x && <p>Se x for falso sim</p>} */}
            {/* a forma abaixo é a mais comum de se usar if e else, chamada de if ternário */}
            {x === true ? (<p>x é verdadeiro</p>) : (<p>x é falso</p>)}
            <button onClick={() => setName("Eduardo")}>Troque o nome</button>
            <p>{name}</p>
        </div>
    )
}

export default ConditionalRender