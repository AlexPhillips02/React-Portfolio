import React from 'react'
import './header.css'
import HeaderButtons from './HeaderButtons'
import Me from '../../assets/me.png'

const Header = () => {
  return (
    <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Alex Phillips</h1>
        <h5 className='text-light'>Graduate Software Developer</h5>
        <HeaderButtons/>

        <div className='me'>
          <img src={Me} alt="me" />
        </div>
    </div>
  )
}

export default Header