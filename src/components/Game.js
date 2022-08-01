import React, { useState, useEffect } from 'react'
import stands from '../data'
import Card from './Card'

/* Importing images and gifs using require.context because of how webpack works */

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { 
    return images[item.replace('./', '')] = r(item);
  });
  return images
}
const requiredImgs = require.context('../assets/img', false, /\.png$/);
const requiredGifs = require.context('../assets/gif', false, /\.gif$/);
const images = importAll(requiredImgs);
const gifs = importAll(requiredGifs);

/* ---------------------------------------------------------------------------- */

export default function Game() {
  console.log('re-rendering')

  const [unseenStands, setUnseenStands] = useState([...stands]);
  const [seenStands, setSeenStands] = useState([]);
  const [displayedCards, setDisplayedCards] = useState([]);

  // This function shuffles an array (destructive)
  const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const getDisplayedCards = () => {
    const unseenStandsCopy = [...unseenStands];
    const seenStandsCopy = [...seenStands];
    if (seenStands.length === 0) {
      shuffle(unseenStandsCopy);
      return [unseenStandsCopy[0], unseenStandsCopy[1], unseenStandsCopy[2]]
    } else if (unseenStands.length === 1) {
      shuffle(seenStandsCopy);
      console.log('unseenstands length = 1')
      return shuffle([unseenStandsCopy[0], seenStandsCopy[0], seenStandsCopy[1]])
    } else if (unseenStands.length === 0) {
      console.log('Congratulations you win!')
      return []
    } else {
      shuffle(unseenStandsCopy);
      shuffle(seenStandsCopy);
      return(shuffle([unseenStandsCopy[0], unseenStandsCopy[1], seenStandsCopy[0]]))
    }
  }

  // Problem : this causes infinite loops
  const updateData = () => {      
      const displayedCards = getDisplayedCards();

      console.log('this code runs')
      console.log('displayed: ', displayedCards)
      setDisplayedCards(displayedCards);

      setUnseenStands((unseenStands) => {
        let newUnseenStands = [...unseenStands];
        newUnseenStands = newUnseenStands.filter((stand) => stand.name !== displayedCards[0].name && stand.name !== displayedCards[1].name && stand.name !== displayedCards[2].name)
        console.log('unseen: ', newUnseenStands)
        return newUnseenStands
      });

      setSeenStands((seenStands) => {
        const seenStandNames = seenStands.map((stand) => stand.name);
        const newDisplayedCards = displayedCards.filter((card) => {
          return (!seenStandNames.includes(card.name))
        })
        console.log('seen: ', [...seenStands, ...newDisplayedCards])
        return [...seenStands, ...newDisplayedCards]
      })
  }

  // To Do: Update the displayed cards function for turns past the first turn

  return (
    <div className='game-container'>
      {displayedCards.map((card) => {
        return <Card 
          key={card.name}
          stand={card}
          imgSrc={images[card.img]}
          gifSrc={gifs[card.gif]}
        />
      })}
      
      <button onClick={updateData}>Next Turn</button>
    </div>
  )
}
