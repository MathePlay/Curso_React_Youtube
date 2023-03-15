import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoas from './components/Pessoas';

function App() {

  return (
    <div className="App">
      <SayMyName nome="Matheus" />
      <SayMyName nome="Maria" />
      <Pessoas
        nome="Matheus"
        idade="31"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
