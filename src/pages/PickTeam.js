import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import PlayerCard from '../components/PlayerCard'
import './PickTeam.css'

const PickTeam = () => {
  const history = useHistory()
  const { teamName } = history.location.state

  const [players, setPlayers] = useState([])

  function generateRandNum(min, max) {
    // generate random player id #'s and pull their stats and put into array
    for (let i = 0; i < 5; i++) {
      let playerVal = Math.floor(Math.random() * (max - min + 1) + min)

      fetch(`http://localhost:5000/api/v1/players/${playerVal}`)
        .then((res) => res.json())
        // .then((res) => console.log(res))
        .then((player) => setPlayers((players) => [...players, player]))
    }
  }

  useEffect(() => {
    // generate # between 16 :: 149 - can change # as needed
    generateRandNum(16, 149)
  }, [])

  return (
    <div>
      {teamName}
      <div className='card-parent'>
        <div className='cards'>
          {players.map((player) => (
            <PlayerCard
              playerImage={player.image_url}
              key={player.player_id}
              stats={player}
              // playerName={player.image_url}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PickTeam
