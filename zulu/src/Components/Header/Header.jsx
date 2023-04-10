import React, { useEffect, useState } from 'react'
import "./Header.css"


const Values = () => {
  const [counter ,setCounter]=useState(0)


  return (
    <header className='Header'> 
      <section>
        <h1>Get Your Best Trip With Lowest Price</h1>
        <div className='overlay'></div>
      </section>
    </header>
  )
}

export default Values