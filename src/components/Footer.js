import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../contexts/ThemeContext' 
 
const Footer = () => {
  const { darkmode } = useContext(ThemeContext);
  return (
    <footer  id="footer"
        className={ darkmode ? "darkmode" : ""}
    >
        <ul>
            <li><a href="#">menu</a></li>
            <li><a href="#">menu</a></li>
            <li><a href="#">menu</a></li>
            <li><a href="#">menu</a></li>
        </ul>
        <ul>
            <li><a href="#">menu</a></li>
            <li><a href="#">menu</a></li>
            <li><a href="#">menu</a></li>
            <li><a href="#">menu</a></li>
            <li><a href="#">menu</a></li>
            <li><a href="#">menu</a></li>
        </ul>
        
        <ul>
            <li><a href="#">menu</a></li>
            <li><a href="#">menu</a></li>
            <li><a href="#">menu</a></li>
            <li><a href="#">menu</a></li> 
        </ul>

        <ul>
            <li><a href="#">menu</a></li>
            <li><a href="#">menu</a></li>
            <li><a href="#">menu</a></li> 
        </ul>
    </footer>
  )
}

export default Footer