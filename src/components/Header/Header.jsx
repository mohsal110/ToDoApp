import React from 'react'
import './Header.css'
import logo from '../../img/logo.png'

const Header = () => (
    <header className="Header">
        {/* <h1>To-Do</h1> */}
        <img src={logo} className='Logo'/>
      </header>
)

export default Header