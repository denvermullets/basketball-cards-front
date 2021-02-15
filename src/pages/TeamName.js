import React from 'react'
import Button from '../components/Button'
import './TeamName.css'

const TeamName = () => {
  return (
    <div className='container'>
      <div className='form'>
        <input
          type='text'
          name='team-name'
          className='team-text'
          placeholder='enter team name'
        />
        <div>
          <Button btnText='Next' />
        </div>
      </div>
    </div>
  )
}

export default TeamName
