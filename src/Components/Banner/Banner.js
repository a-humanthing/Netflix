import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
        <div className="content">
            <h1 className="title">
                Movie Name
            </h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className='description'>This is some dummy data for the netflix project in react this is fun to write something stupid</h1>
        </div>
        <div className="fade">
            
        </div>
    </div>
  )
}

export default Banner