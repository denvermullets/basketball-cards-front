import React, { useState } from 'react'
import Button from '../components/Button'
import './TeamName.css'

const TeamName = () => {
  const [teamName, setTeamName] = useState('')

  const handleTeamName = (e) => {
    setTeamName(e.target.value)
  }

  const submitTeamName = () => {
    if (teamName) {
      console.log(teamName)
    }
  }

  return (
    <div className='container'>
      <div className='form'>
        <input
          type='text'
          name='team-name'
          className='team-text'
          placeholder='enter team name'
          onChange={handleTeamName}
        />
        <div>
          <Button btnText='Next' onClick={submitTeamName} />
        </div>
      </div>
    </div>
  )
}

export default TeamName
