import React from 'react';
import "./Footer.css";
import {AiFillFacebook} from "react-icons/ai";
import {FiInstagram} from "react-icons/fi";
import {FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
        <footer>
          <a href="" className='footer_logo'>egator</a>
          <ul className='permalinks'>
            <li><a href="#">home</a></li>
            <li><a href="#experience">experience</a></li>
            <li><a href="#portfolio">portfolio</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
          <div className="footer_socials">
            <a href="https://facebook.com"><AiFillFacebook/></a>
            <a href="https://instagram.com"><FiInstagram/></a>
            <a href="https://twitter.com"><FaTwitter/></a>
          </div>
          <div className="footer_copyright">
            <small>&copy; all rights reserved.</small>
          </div>
        </footer>
    )
}

export default Footer