import React, { useState } from 'react';
import './style/styles.css'
function App() {
  const [count, setCount] = useState(0)
  const [toggleBtn, setToggleBtn] = useState(false)
  const [value, setValue] = useState("Mashkhurbek")

  function inc() {
    setCount(count + 1)
  }
  function dec() {
    setCount(count - 1)
  }
  return (
    <React.Fragment>
      <div className='app w-50 mx-auto'>
        <h1>Meni pulim: {count}</h1>
        <button
          className='btn btn-success'
          onClick={inc}
        >
          Plus
        </button>
        <button
          className='btn btn-danger'
          onClick={dec}
        >
          Minus
        </button>
        <button
          className='btn btn-secondary'
          onClick={() => setToggleBtn(!toggleBtn)}
        >
          Toggle
        </button>
        {toggleBtn
          ? <p>Mashkhurbek Khoshimovku</p>

          : null
        }
        <hr />
        <p>FullName: {value}</p>
        <input
          type='text'
          className='form-control'
          value={value} 
          onChange={event => setValue(event.target.value)}
          />
          
      </div>
    </React.Fragment>

  );
}

export default App;
