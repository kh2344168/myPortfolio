import React from 'react';
import "./Nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {BiBookBookmark} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {FiMessageSquare} from "react-icons/fi";
import { useState , useEffect , useRef  } from 'react';
const Nav = () => {
  const [activeNav , setActiveNav] = useState("#");

  

  return (
    <>
          <div className="navigation">
          <ul>
            
            <li onClick={()=> setActiveNav("#")} className={activeNav == "#" ? "list active" :"list" } >
              <a href="#" >
                <span className="icon"><AiOutlineHome/></span>
              </a>
            </li>
            <li  onClick={()=> setActiveNav("#portfolio")} className={activeNav == "#portfolio" ? "list active" :"list" } >
              <a href="#portfolio"   onClick={()=> setActiveNav("#portfolio")} className={activeNav == "#portfolio" ? "active" :"" }>
                <span className="icon"><RiServiceLine/></span>
              </a>
            </li>
            <li onClick={()=> setActiveNav("#experience")} className={activeNav == "#experience" ? "list active" :"list" }>
              <a href="#experience">
                <span className="icon"><BiBookBookmark/></span>
              </a>
            </li>
            <li onClick={()=> setActiveNav("#contact")} className={activeNav == "#contact" ? "list active" :"list" }>
              <a  href="#contact">
                <span className="icon"><FiMessageSquare/></span>
              </a>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>

    </>

    

  )
}

export default Nav