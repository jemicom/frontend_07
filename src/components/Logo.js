import React from 'react'
import './Logo.css'
import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <motion.h1 className='logo'
        initial={{ scale: 0, opacity: 0}}
        animate={{ scale: 1, opacity: 1}}
        transition={{
          duration:0.5,
          ease:"easeIn"
          // type:"spring",
          // stiffness:200
        }}
    >Logo</motion.h1>
  )
}

export default Logo