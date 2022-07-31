import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
      <div className='card-front'>
        <img src={props.imgSrc} alt='stand'/>
        <h2 className='card-heading card-heading--front'>{props.stand.name}</h2>
      </div>
      <div className='card-back'>
        <h2 className='card-heading card-heading--back'>{props.stand.name}</h2>
        <h3 className='card-subheading'>Stand User: {props.stand.user}</h3>
        <img className='gif' src={props.gifSrc} alt='stand gif'/>
      </div>
    </div>
  )
}