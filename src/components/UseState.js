import React, {useState} from 'react'

const UseState = () => {
    const [text, setText] = useState('Changed text')

    const handleClick = () => {
        setText('We changed this text');
    }
  return (
   <section className='--flex-center --100vh'>
        <div className="container --center-all">
            <h3>Timi State</h3>

            <h2>{text}</h2>

            <button className='--btn --btn-primary --btn-lg' onClick={handleClick}>Change</button>
        </div>
   </section>
  )
}

export default UseState