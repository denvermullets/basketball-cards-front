import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import PlayerCard from '../components/PlayerCard'
import './PickTeam.css'

const PickTeam = () => {
  const history = useHistory()
  const { teamName } = history.location.state

  const [players, setPlayers] = useState([])

  function generateRandNum(min, max) {
    let arr = []
    for (let i = 0; i < 5; i++) {
      let playerVal = Math.floor(Math.random() * (max - min + 1) + min)
      arr.push(playerVal)
    }
    return arr
  }

  function generateTeam() {
    // generate # btwn 16 :: 149
    console.log(generateRandNum(16, 149))
  }

  useEffect(() => {
    generateTeam()
  }, [])

  return (
    <div className='card-parent'>
      <div className='cards'>
        <PlayerCard playerName='steve-kerr.jpg' />
        <PlayerCard playerName='bill-laimbeer.jpg' />
        <PlayerCard playerName='magic-johnson.jpg' />
        <PlayerCard playerName='michael-jordan.jpg' />
        <PlayerCard playerName='mookie-blaylock.jpg' />
      </div>
    </div>
  )
}

export default PickTeam
