import Navbar from './components/navbar';
import MiComponente from './components/consumoApi';
import Fixture from './components/fixtureApi';
import Equipos from './components/equipos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     {/* <MiComponente></MiComponente>  */}
      <Fixture></Fixture>
      <Equipos></Equipos>
     
    </div>
  );      
}

export default App;
