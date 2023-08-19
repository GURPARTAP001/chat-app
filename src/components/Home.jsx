import React from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar></Sidebar>
        <Chat></Chat>
      </div>
    </div>
  )
}

export default Home
