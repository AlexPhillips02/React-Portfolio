import React from 'react'
import CV from '../../assets/cv.pdf'

const HeaderButtons = () => {
  return (
    <div className='HeaderButtons'>
        <a href={CV} className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default HeaderButtons