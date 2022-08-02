import React from 'react'

export default function Scorekeeper(props) {
  return (
    <div className='scorekeeper'>
      <div className='current-score'>Score: <span className='score-num'>{props.score}</span></div>
      <div className='best-score'>Best: <span className='score-num'>{props.bestScore}</span></div>
    </div>
  )
}
