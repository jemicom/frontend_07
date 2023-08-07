import React,{ useContext } from 'react'
// import './TopPaddingLayout.css'
import { ThemeContext } from '../contexts/ThemeContext'

const TopPaddingLayout = (Component) => function HOC(){
  const { darkmode } = useContext(ThemeContext);

  return (
    <div   
          style={{ paddingTop : "150px"}}
          className={ darkmode ? "darkmode" : ""}
    >
        <Component/>
    </div>
  )
}

export default TopPaddingLayout