import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../components/Button'
import './TeamName.css'

const TeamName = () => {
  const [teamName, setTeamName] = useState('')

  const handleTeamName = (e) => {
    setTeamName(e.target.value)
  }

  const submitTeamName = () => {
    if (teamName) {
      // POST to db w/teamName
      history.push({
        pathname: '/pick-team',
        state: { teamName: teamName },
      })
    }
  }

  let history = useHistory()
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
