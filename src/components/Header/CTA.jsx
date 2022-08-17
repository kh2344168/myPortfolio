import React from 'react'
import CV from '../../assets/khaled aly fronend.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'> Download CV</a>
        <a href="#contact" className='btn btn_primary'> let's talk</a>
    </div>
  )
}

export default CTA
