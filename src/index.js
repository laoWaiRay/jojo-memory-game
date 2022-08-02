import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Game from './components/Game';
import Modal from './components/Modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className='main'>
      {isModalOpen ?  
       <Modal
        toggleModal={toggleModal}
       /> : null
      }
      <Header
        toggleModal={toggleModal}
      />
      <Game/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

