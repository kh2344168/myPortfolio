import React from 'react'
import "./Header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
// import ME from '../../assets/me.png'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>hello i 'm</h5>
        <h1>khaled aly </h1>
        <h5 className="text-light">frontend Developar</h5>
        <CTA/>
        <HeaderSocials/>
        <a href="#acontact" className='scroll_down'>scroll down</a>
      </div>
    </header>
  )
}

export default Header