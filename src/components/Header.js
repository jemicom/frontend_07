import React, { useContext } from 'react'
import './Header.css'
import { ThemeContext } from '../contexts/ThemeContext'
import Logo from './Logo'
import NavBar from './NavBar'

const Header = () => {
  const { darkmode } = useContext(ThemeContext);

  return (
    <div className='header-container'>
      <header
          className={ darkmode ? "darkmode" : ""}
      >
          <Logo />
          <NavBar />
      </header>
    </div>
  )
}

export default Header