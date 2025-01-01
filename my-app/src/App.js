import './App.css';
import Navbar from './Components/Navbar.js';
import Header from './Components/Header.js';
import Description from './Components/Description.js';
import Parcours from './Components/Parcours.js';
import Projects from './Components/Projects.js';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Header title="PortFolio"/>
      <Description/>
      {/* <Parcours/> */}
      <Projects/>
    </div>
  );
}

export default App;
