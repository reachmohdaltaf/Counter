// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'
import '../components/Counter.css'

function Counter() {
    const [counter, setCounter] = useState(0)
    const increase = ()=>{
       setCounter(counter + 1)
       console.log(counter)
       
    }
    const decrease = ()=>{
        counter === 0 ? null : setCounter(counter - 1);
    }
  return (
    <div className='container'>
      <div className='counter'>
           <h1>COUNTER</h1> 
           <h2>{counter}</h2>
        <div className='button'>
      
        <button className='btn' onClick={decrease}>-</button>
        <button className='btn' onClick={increase}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
