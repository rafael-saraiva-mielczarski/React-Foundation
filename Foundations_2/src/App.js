import { useState } from 'react';
import './App.css';
import iconeGitHub from './assets/icone-github-noir.png';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragments from './components/Fragments';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUsername from './components/ShowUsername';

function App() {
    // const name = "Rafael";
    const [username] = useState("Roberta")

    const [carDetails] = useState(
        [
            {id: 1, marca: "Ford", kilometragem: 40.000, cor: "Vermelho"},
            {id: 2, marca: "Fiat", kilometragem: 30.000, cor: "Azul"},
            {id: 3, marca: "Honda", kilometragem: 0, cor: "Cinza"},
            {id: 4, marca: "Chevrolet", kilometragem: 20.000, cor: "Preto"},
        ])

    function showAlert() {
        alert("Passando a funcao do pai pro filho por prop")
    }

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
      <CarDetails id={carDetails.id} marca={carDetails.marca} kilometragem={carDetails.kilometragem} cor={carDetails.cor} />
      <hr />
      {/* Loop em lista de objetos */}
      {carDetails.map((car) => (
        <CarDetails 
        id={car.id} 
        marca={car.marca} 
        kilometragem={car.kilometragem} 
        cor={car.cor} 
        />
      ))}
      <hr />
      <Fragments />
      <hr />
      {/* Children Prop */}
      {/* Serve para colocar conteudo dentro de um componente pai, usar a tag children no component pai e escrever dentro dele o conteudo da child */}
      <Container valor="props junto com children">
        <p>conteudo do container</p>
      </Container>
      <hr />
      <ExecuteFunction alertMsg={showAlert} />
    </div>
  );
}

export default App;
