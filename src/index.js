import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import stands from './data'
import Card from './components/Card';
import Header from './components/Header';

/* Importing images and gifs using require.context because of how webpack works */

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { 
    return images[item.replace('./', '')] = r(item);
  });
  return images
}
const requiredImgs = require.context('./assets/img', false, /\.png$/);
const requiredGifs = require.context('./assets/gif', false, /\.gif$/);
const images = importAll(requiredImgs);
const gifs = importAll(requiredGifs);

/* ---------------------------------------------------------------------------- */

const App = () => {
  return (
    <div>
      <Header/>

      <Card 
        stand={stands[0]}
        imgSrc={images[stands[0].img]}
        gifSrc={gifs[stands[0].gif]}
      />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

