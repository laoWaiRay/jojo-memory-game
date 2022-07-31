import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import stands from './data'

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
      {stands.map((stand) => {
        return (
          <div key={stand.name}>
            <h1>{stand.name}</h1>
            <h2>{stand.user}</h2>
            <img src={images[stand.img]} alt='stand'/>
            <img src={gifs[stand.gif]} alt='stand'/>
          </div>
        )
      })}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

