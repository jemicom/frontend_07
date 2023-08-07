import React, { useState } from 'react'
import './DotLayout.css'
import { motion } from 'framer-motion'

const dots = ["main01", "main02", "main03", "main04"]

const DotLayout = ({isActive, setIsActive}) => {
  return (
    <div  className='dots'>
        <ul>
            {
                dots.map(dot=>(
                    <li key={dot}>
                        <motion.a href={`#${dot}`}
                            className={isActive === dot ? "active" : ""}
                            onClick={()=>setIsActive(dot)}

                            initial={{scale: 1}} 
                            whileHover={{ scale:1.3}}
                        >{dot}</motion.a>
                    </li> 
                ))
            }
        </ul>
    </div>
  )
}

export default DotLayout