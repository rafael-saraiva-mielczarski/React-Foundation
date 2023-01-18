import { useState } from 'react';

const ManageData = () => {
    let data = 10;

    const [number, setNumber] = useState(15)

  return (
    <div>
        <h1>Manage Data</h1>
        <p>Valor: {data}</p>
        <button onClick={() => (data + data)}>Clique para alterar o valor</button>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(number + number)}>Clique para alterar o valor usando state</button>
        </div>
    </div>
  )
}

export default ManageData