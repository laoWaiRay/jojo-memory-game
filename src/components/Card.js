import React from 'react'

export default function Card(props) {
  return (
    <div className='card' id={props.id} onClick={props.onClick}>
      <div className='card-inner'>
        <div className='card-front'>
          <div className='img-wrapper'>
            <img className='card-front-img' src={props.imgSrc} alt='stand'/>
          </div>
          <h2 className='card-heading card-heading--front'>{props.stand.name}</h2>
        </div>
        <div className='card-back'>
          <h2 className='card-heading card-heading--back'>{props.stand.name}</h2>
          <div className='gif-wrapper'>
            <img className='gif' src={props.gifSrc} alt='stand gif'/>
          </div>
          <h3 className='card-subheading'>Stand User: {props.stand.user}</h3>
          <p className='card-desc'><b>{props.stand.descBold}</b> {props.stand.desc1}</p>
          <p className='card-desc'>{props.stand.desc2}</p>
        </div>
      </div>
    </div>
  )
}