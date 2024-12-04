import './App.css';
import Container from './componentes/buttonCont';
import logo from './logo.jpeg';

function App() {

  return (
    <div className="App">
      <header className="App-header" >
      <img src={logo} className="App-logo custom-logo"/>
        <Container />
      </header>
    </div>
  );
}

export default App;
