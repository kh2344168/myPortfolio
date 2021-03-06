import React from 'react';
import "./Nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {BiBookBookmark} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {FiMessageSquare} from "react-icons/fi";
import {  useContext  } from 'react';
import {activeNavecontext} from "../../App"
const Nav = () => {
  // const [activeNav , setActiveNav] = useState("#");
  const active = useContext(activeNavecontext);


  
  

  return (
    <>
          <div  className="navigation">
          <ul>
            
            <li onClick={()=> active.setActiveNav("#Header")}  className={active.activeNav === "#Header" ? "list active" :"list" } >
              <a href="#Header" >
                <span className="icon"><AiOutlineHome/></span>
              </a>
            </li>
            <li  onClick={()=> active.setActiveNav("#portfolio")} className={active.activeNav === "#portfolio" ? "list active" :"list" } >
              <a href="#portfolio"  >
                <span className="icon"><RiServiceLine/></span>
              </a>
            </li>
            <li  onClick={()=> active.setActiveNav("#Skills")} className={active.activeNav === "#Skills" ? "list active" :"list" }>
              <a href="#Skills">
                <span className="icon"><BiBookBookmark/></span>
              </a>
            </li>
            <li  className={active.activeNav === "#contact" ? "list active" :"list" }>
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