import React, { useEffect } from 'react'

export default function Modal(props) {
  useEffect(() => {
    const modalInner = document.querySelector('.modal-inner');

    const handleClick = (e) => {
      if (!modalInner.contains(e.target)) {
        props.toggleModal(e)
      }
    }
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])
  const style = {color: 'rebeccaPurple', marginTop: '-1.5rem'}

  return (
    <div className='modal'>
     <div className='modal-inner'>
      <button className='modal-close-btn' onClick={props.toggleModal}>X</button>
      <h1>How to play:</h1>
      <p>This is a memory game based on the popular manga series <a className='text-link' href='https://en.wikipedia.org/wiki/JoJo%27s_Bizarre_Adventure'>JoJo's Bizarre Adventure</a>, written and illustrated by <a href='https://en.wikipedia.org/wiki/Hirohiko_Araki' className='text-link'>Hirohiko Araki</a>. The stands included are from seasons 1-3 of the anime adaptation.</p>
      <p>Hover over the cards to view details about each particular stand.</p>
      <p>Each time you click on a card, 3 new cards will appear. Be careful however, as if you click on the same stand twice, your score will reset!</p>
      <p style={style}>(THIS MUST BE THE WORK OF AN ENEMY STAND ゴ ゴゴ ゴ ゴゴ ゴ)</p>
     </div>
    </div>
  )
}
