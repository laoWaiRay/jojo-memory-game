import { click } from '@testing-library/user-event/dist/click';
import React, { useState, useEffect } from 'react'
import stands from '../data'
import Card from './Card'
import Scorekeeper from './Scorekeeper';

/* Importing images and gifs using require.context because of how webpack works */

function importAll(r) {
  let images = {};
  r.keys().map((item) => { 
    return images[item.replace('./', '')] = r(item);
  });
  return images
}
const requiredImgs = require.context('../assets/img', false, /\.png$/);
const requiredGifs = require.context('../assets/gif', false, /\.gif$/);
const images = importAll(requiredImgs);
const gifs = importAll(requiredGifs);

/* ---------------------------------------------------------------------------- */


//TO DO: Change mobile double clicks to something more native to mobile

export default function Game() {
  console.log('re-rendering')

  const [unseenStands, setUnseenStands] = useState([...stands]);
  const [seenStands, setSeenStands] = useState([]);
  const [displayedCards, setDisplayedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

  const updateDisplay = (e) => {  
    if (isMobile) {
      if(e.detail === 2) {
        const displayedCards = getDisplayedCards();
        setDisplayedCards(displayedCards);
      }
    } else {
      const displayedCards = getDisplayedCards();
      setDisplayedCards(displayedCards);
    }
  }

  useEffect(() => {
    updateDisplay({detail: 2})
  }, [])

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const checkIsSeen = function(e) {
      if ((isMobile && e.detail === 2) || !isMobile) {
        const clickedCardName = this.name;
        const seenStandNames = seenStands.map((stand) => stand.name);

        if (seenStandNames.includes(clickedCardName)) {
          console.log('Already clicked!');
          if (score > bestScore) {
            setBestScore(score);
          }
          setScore(0);
          setUnseenStands((unseenStands) => {
            return [...unseenStands, ...seenStands];
          })
          setSeenStands([]);
        } else {
          const clickedCard = displayedCards.find((card) => card.name === clickedCardName)
          setSeenStands((seenStands) => {
            return [...seenStands, clickedCard]
          });
          setUnseenStands((unseenStands) => {
            return unseenStands.filter((stand) => stand.name !== clickedCard.name)
          })
          setScore((score) => score + 1)
        }
      }
    }

    const toggleActive = function(){
      this.classList.toggle('active')
    }

    cards.forEach((card) => {
      card.name = card.querySelector('.card-heading--front').innerText;
      if (isMobile) {
        card.addEventListener('click', toggleActive)
      } 
      card.addEventListener('click', checkIsSeen)
    })

    // For mobile dragging
    const card0 = document.getElementById('card-0');
    const card1 = document.getElementById('card-1');
    const card2 = document.getElementById('card-2');
    const container = document.querySelector('.card-container');

    let touchstartX = 0
    let touchendX = 0
    let currentCard = card0;

    if(card0) card0.scrollIntoView({behavior: "smooth", block:"center"});
        
    function checkDirection() {
      if (touchendX < touchstartX) {
        console.log('swiped left!')
        if (currentCard === card0) {
          card1.scrollIntoView({behavior: "smooth", block:"center"})
          currentCard = card1;
        } else if (currentCard === card1) {
          card2.scrollIntoView({behavior: "smooth", block:"center"})
          currentCard = card2
        }
      };
      if (touchendX > touchstartX) {
        console.log('swiped right!')
        if (currentCard === card2) {
          card1.scrollIntoView({behavior: "smooth", block:"center"})
          currentCard = card1;
        } else if (currentCard === card1) {
          card0.scrollIntoView({behavior: "smooth", block:"center"})
          currentCard = card0
        }
      }
    }

    const touchStart = (e) => {
      e.stopPropagation()
      touchstartX = e.changedTouches[0].screenX;
    }

    const touchEnd = (e) => {
      e.stopPropagation()
      touchendX = e.changedTouches[0].screenX;
      checkDirection()
    }

    container.addEventListener('touchstart', touchStart);
    container.addEventListener('touchend', touchEnd);
  
    
    return () => {
      cards.forEach((card) => {
        if (isMobile) {
          card.removeEventListener('click', toggleActive)
        } 
        card.removeEventListener('click', checkIsSeen)
      })
      container.removeEventListener('touchstart', touchStart);
      container.removeEventListener('touchend', touchEnd);      
    }
  }, [displayedCards])

  

  return (
    <div className='game-container'>
      <Scorekeeper
        score={score}
        bestScore={bestScore}
      />
      <div className='card-container'>
        {displayedCards.map((card, index) => {
          return <Card
            id={'card-' + index} 
            onClick={updateDisplay}
            key={card.name}
            stand={card}
            imgSrc={images[card.img]}
            gifSrc={gifs[card.gif]}
            descBold={card.descBold}
            desc1={card.desc1}
            desc2={card.desc2}
          />
        })}
      </div>
    </div>
  )
}
