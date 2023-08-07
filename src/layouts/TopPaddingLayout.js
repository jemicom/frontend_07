import React from 'react'
// import './TopPaddingLayout.css'

const TopPaddingLayout = (Component) => function HOC(){
  return (
    <div   
          style={{ paddingTop : "150px"}}
    >
        <Component/>
    </div>
  )
}

export default TopPaddingLayout