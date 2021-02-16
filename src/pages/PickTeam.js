import React from 'react'
import { useHistory } from 'react-router-dom'
import './PickTeam.css'

// 1520x2123

const PickTeam = () => {
  const history = useHistory()
  const { teamName } = history.location.state

  return (
    <div className='cards'>
      <div className='card'>
        {teamName}
        <div className='image-wrapper'>
          <img src='https://i.imgur.com/jMsPGtd.jpg' />
        </div>
      </div>
      <div className='card'>
        {teamName}
        <div className='image-wrapper'>
          <img src='https://i.imgur.com/jMsPGtd.jpg' />
        </div>
      </div>
      <div className='card'>
        {teamName}
        <div className='image-wrapper'>
          <img src='https://i.imgur.com/jMsPGtd.jpg' />
        </div>
      </div>
      <div className='card'>
        {teamName}
        <div className='image-wrapper'>
          <img src='https://i.imgur.com/jMsPGtd.jpg' />
        </div>
      </div>
      <div className='card'>
        {teamName}
        <div className='image-wrapper'>
          <img src='https://i.imgur.com/jMsPGtd.jpg' />
        </div>
      </div>
    </div>
  )
}

export default PickTeam
