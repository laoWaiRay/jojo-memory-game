import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Game from './components/Game';

const App = () => {
  return (
    <div>
      <Header/>
      <Game/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

