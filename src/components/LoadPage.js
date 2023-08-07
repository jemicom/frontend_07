import React, { useState } from 'react'
import './LoadPage.css'
import { motion } from 'framer-motion'


const variants = {
    show: { opacity: 1 },
    hidden: { opacity: 0 },
}

const LoadPage = () => {
    const [ isLoading, setIsLoadding ]=useState(true);

    setTimeout(()=>{
        setIsLoadding(false)
    }, 3000)

  return (
    <motion.div className='LoadPage'
                variants={ variants}
                animate={ isLoading ? "show" : "hidden" }
                transition={{ ease : "easeInOut"}}

                style={{ display : isLoading ? "flex": "none"}}
    >
        <h5>LoadPage</h5>
    </motion.div>
  )
}

export default LoadPage