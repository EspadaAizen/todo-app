import React from 'react'
import '../styles/startupPG.css';
import Login from './Login';
const StartupPG = () => {
  return (
    <div className='mainDiv'>
      <div className='heading'>
        <h2>Welcome To</h2>
        <h1>TODO</h1>
      </div>
      <div className='Auth'>
        <div className='login'>
            <Login/>
        </div>
      </div>
    </div>
  )
}

export default StartupPG
