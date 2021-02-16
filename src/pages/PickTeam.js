import React from 'react'
import { useHistory } from 'react-router-dom'
import PlayerCard from '../components/PlayerCard'
import './PickTeam.css'

// 1520x2123

const PickTeam = () => {
  const history = useHistory()
  const { teamName } = history.location.state

  return (
    <div className='card-parent'>
      <div className='cards'>
        <PlayerCard teamName={teamName} />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </div>
    </div>
  )
}

export default PickTeam
