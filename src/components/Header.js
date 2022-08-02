import React from 'react'

export default function Header(props) {
  return (
    <header className='header'>
      <div className='header-heading'>
        <span className='header-logo'>JJBA Memory Game</span>
        <button className='show-instructions-btn' onClick={props.toggleModal}>instructions <i className="fa-solid fa-circle-info"/> </button>
      </div>
      <div className='made-by'>
        <span className='made-by-top'>
          Made with 
          <a href='https://reactjs.org/' className='react-link'> React <i className="fa-brands fa-react"/> </a>
        </span>
        <span className='made-by-bottom'>
          by 
          <a href='https://github.com/laoWaiRay' className='github-link'> laoWaiRay <i className="fa-brands fa-github"/> </a>
        </span>
      </div>
    </header>
  )
}
