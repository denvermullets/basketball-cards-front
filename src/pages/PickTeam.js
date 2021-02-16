import React from 'react'
import { useHistory } from 'react-router-dom'

const PickTeam = () => {
  const history = useHistory()
  const { teamName } = history.location.state

  return (
    <div className='cards'>
      <div className='card'>{teamName}</div>x x
    </div>
  )
}

export default PickTeam
