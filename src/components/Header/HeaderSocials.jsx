import React from 'react';
import {BsLinkedin}from 'react-icons/bs';
import {AiFillGithub}from 'react-icons/ai';
import {FiDribbble}from 'react-icons/fi';


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://linkedin.com" target="blank"><BsLinkedin/></a>
      <a href="https://github.com"   target="blank"><AiFillGithub/></a>
      <a href="https://dribbble.com" target="blank"><FiDribbble/></a>
      
    </div>
  )
}

export default HeaderSocials