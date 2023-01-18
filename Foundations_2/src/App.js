import { useState } from 'react';
import './App.css';
import iconeGitHub from './assets/icone-github-noir.png';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUsername from './components/ShowUsername';

function App() {
    // const name = "Rafael";
    const [username] = useState("Roberta")

    const [carDetails] = useState(
        {
            marca: "Ford",
            kilometragem: "40.000",
            cor: "Vermelho"
        })

  return (
    <div className='App'>
      <h1> Avançando nos fundamentos React </h1>
      {/* Imagem em public */}
      <div>
        <img src="dev.jpg" alt="dev" />
      </div>
      {/* Imagem na pasta assets */}
      <div>
        <img src={iconeGitHub} alt="icone github" />
      </div>
      <hr />
      <ManageData />
      <hr />
      <ListRender />  
      <hr />
      <ConditionalRender /> 
      <hr />
      {/* Props */}
      <ShowUsername name={username} />
      <hr />
      {/* Deestructuring Props */}
      <CarDetails marca={carDetails.marca} kilometragem={carDetails.kilometragem} cor={carDetails.cor} />
    </div>
  );
}

export default App;
