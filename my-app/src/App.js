import './App.css';
import Navbar from './Components/Navbar.js';
import Header from './Components/Header.js';
import Description from './Components/Description.js';
import Parcours from './Components/Parcours.js';
import Projects from './Components/Projects.js';

import { useState, useRef } from 'react';
import MyModal from './Components/MyModal.js';

function App() {

  const modalRef = useRef(null);

  const OpenModal = (project) => {

    if (modalRef.current) {
      console.log("iziz");
      modalRef.current.openModal(project);
    }
  };

  return (
    <div className="App">
      <Navbar/>
      <Header title="PortFolio"/>
      <Description/>
      {/* <Parcours/> */}
      <Projects/>

      <button
        onClick={() => OpenModal({title:"dfsf", image:"/Images/lol.jpg"})}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Open Modal for Item 1
      </button>

      <button
        onClick={() => OpenModal({title:"fdfdsfdfdf", image:"/Images/lol.jpg"})}
        className="block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Open Modal for Item 2
      </button>

      <MyModal ref={modalRef}/>

    </div>
  );

}

export default App;
