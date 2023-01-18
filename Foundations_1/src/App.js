import './App.css';
import Challenge from './components/Challenge';
import ComponenteReutilizavel from './components/ComponentReutilizavel';
import Events from './components/Events';
import PrimeiroComponent from './components/PrimeiroComponent';
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  return (
    <div className="App">
      <h1> Fundamentos </h1>
      {/* Comentarios que nao aparecem no devtools */}
      <hr />
      <PrimeiroComponent />
      <hr />
      <TemplateExpressions />
      <hr />
      <ComponenteReutilizavel />
      <hr />
      <Events />
      <hr />
      <Challenge />
    </div>
  );
}

export default App;
