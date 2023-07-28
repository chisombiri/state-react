import React, { useState } from 'react'

const Counts = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1)
    }
 
    const handleReset = () => {
        setCount(0)
    }
 
    const handleSubtract = () => {
        setCount(count - 1)
    }

    let color = '#333';
    if (count >= 1) {
        color = "blue";
    } else if (count < 0) {
        color = "red";
    } else {
        color = '#333';
    }
 
  return (
    <section className='--flex-center --100vh --bg-primary'>
        <div className='container --bg-light --p2 --m2 --center-all'>
            <h3>Counter app</h3>

            <h1 style={{color}}>{count}</h1>

            <div className='--flex-center'>
                <button className='--btn --btn-danger' onClick={handleSubtract}>Subtract</button>
                <button className='--btn' onClick={handleReset}> Reset</button>
                <button className='--btn --btn-primary' onClick={handleAdd}>Add</button>
            </div>
        </div>
    </section>
  )
}

export default Counts