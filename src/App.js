import Navbar from './components/navbar';

import Fixture from './components/fixtureApi';
import Equipos from './components/equipos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     
      <Fixture></Fixture>
      <Equipos></Equipos>
     
    </div>
  );      
}

export default App;
