import React,{useContext ,useEffect} from 'react'
import "./Header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
// import ME from '../../assets/me.png'
import { useInView } from 'react-intersection-observer'
import {activeNavecontext} from "../../App"
const Header = () => {
const [ref , inview] = useInView()
const active = useContext(activeNavecontext);

  useEffect(()=>{

    if(inview === true){
      active.setActiveNav("#")
    }else{

    }
})

  return (
    <header ref={ref}>
      <div  className="container header_container">
        <h5>hello i 'm</h5>
        <h1>khaled aly </h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <a href="#acontact" className='scroll_down'>scroll down</a>
      </div>
    </header>
  )
}

export default Header