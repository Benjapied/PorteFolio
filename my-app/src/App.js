import './App.css';
import Navbar from './Components/Navbar.js';
import Header from './Components/Header.js';
import Description from './Components/Description.js';
import Projects from './Components/Projects/Projects.js';

import { useEffect, useRef } from 'react';
import MyModal from './Components/Projects/MyModal.js';
import ModalManager from './Components/Projects/ModalManager.js';
import Footer from './Components/Footer.js';
import { LanguageProvider } from './LanguageContext.js';



function App() {

  const modalRef = useRef(null);

  const OpenModal = (project) => {

    if (modalRef.current) {
      modalRef.current.openModal(project);
    }
  };

  ModalManager.setModalRef(modalRef);

  useEffect(() => {
    console.log(window.Flowbite)
  });

  return (
    <LanguageProvider>
      <div className="App">
        <Navbar/>
        <Header title="Benjamin Arhancet"/>
        <Description/>
        {/* <Parcours/> */}
        <Projects/>
        <Footer/>

        <MyModal ref={modalRef}/>

      </div>
    </LanguageProvider>
  );

}

export default App;