import './App.css';
import MyComponent from './components/MyComponent';
import ScopeComponent from './components/ScopeComponent';

function App() {
    const n = 20;

  return (
    <div className="App">

        {/* CSS Global */}
        <h1>CSS e React</h1>
        {/* CSS do componente */}
        <MyComponent />
        {/* CSS Inline */}
        <p style={{color: "blue", background: "gray", padding: "20px"}}>
            texto estilizado com CSS Inline
        </p>
        {/* CSS Inline Dinamico */}
        <h2 style={n > 15 ? {color: "gold"} : {color: "red"}}>CSS Inline Dinamico</h2>
        {/* CSS Classes Dinamicas */}
        <h3 className={n < 10 ? "red-title" : "blue-title" }>CSS Classes Dinamicas</h3>
        {/* Scoped CSS Component */}
        <ScopeComponent />
    </div>
  );
}

export default App;
