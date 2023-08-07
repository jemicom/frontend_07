import React from 'react'
import WrapLayout from '../../layouts/WrapLayout'
import {motion } from 'framer-motion'

const Main01 = () => {
  return (
    <div>
      <motion.h2 
          style={{ marginBottom: '20px'}}
          initial={{ opacity:0, y : 50}} 
          transition={{ 
              duration: 0.5
          }}
      
          whileInView={{ opacity:1, y:0 }}
          viewport={{ amount:0.8 }}
      >Main01</motion.h2>
      <motion.p
          initial={{ opacity:0, x : 50}}
          whileInView={{ opacity:1, x : 0}}
          transition={{ 
            duration: 0.5,
            delay:0.5
        }}
      >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fuga ratione quas atque vitae eos, nam maxime iure? Et nobis modi veritatis sunt quisquam fugiat esse fugit iste id recusandae?
      </motion.p>
      <motion.p
          initial={{ opacity:0, x : 50}}
          whileInView={{ opacity:1, x : 0}}
          transition={{ 
            duration: 0.5,
            delay:1
        }}
      >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fuga ratione quas atque vitae eos, nam maxime iure? Et nobis modi veritatis sunt quisquam fugiat esse fugit iste id recusandae?
      </motion.p>
    </div>
  )
}

// export default Main01
export default WrapLayout(Main01, "main01", "main")