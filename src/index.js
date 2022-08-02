import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Game from './components/Game';
import Modal from './components/Modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className='main'>
      {isModalOpen ?  
       <Modal
        toggleModal={toggleModal}
        isMobile={isMobile}
       /> : null
      }
      <Header
        toggleModal={toggleModal}
      />
      <Game/>
      <i className="fa-solid fa-angles-up" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: "smooth"})}}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

