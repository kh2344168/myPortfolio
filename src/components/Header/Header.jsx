import React,{useContext ,useEffect} from 'react'
import "./Header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/khaled_th.png'
import { useInView } from 'react-intersection-observer'
import {activeNavecontext} from "../../App"
const Header = () => {
const [ref , inview] = useInView()
const [refTwo , inviewTwo] = useInView()
const active = useContext(activeNavecontext);

  useEffect(()=>{

    if(inview === true || inviewTwo === true ){
      active.setActiveNav("#Header")
    }else{

    }
})

  return (
    <header id='Header' ref={ref}  >
      <div  className="container header_container">
        <h5>hello i 'm</h5>
        <h1>khaled aly </h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="" />          
        </div>
        <a href="#acontact" className='scroll_down'>scroll down</a>
      </div >
      <div ref={refTwo}></div>
    </header >
  )
}

export default Header