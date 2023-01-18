import './App.css';
import iconeGitHub from './assets/icone-github-noir.png';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
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
    </div>
  );
}

export default App;
