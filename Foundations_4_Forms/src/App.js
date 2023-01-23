import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
        <h1>Forms</h1>
        <MyForm user={{name: "Eduardo", email: "eduardo@gmail.com", bio: "hey", sexo: "Outro"}}/>
    </div>
  );
}

export default App;
