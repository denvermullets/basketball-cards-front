import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../components/Button'
import styled from 'styled-components'
import Card from '../components/Card'
import './PickTeam.css'

const PickTeam = () => {
  const history = useHistory()
  const { teamName } = history.location.state

  const [players, setPlayers] = useState([])

  function generateRandNum(min, max) {
    // generate random player id #'s and pull their stats and put into array
    // 91 is temp a player that doesn't have an image in the bucket, skip for now if drawn
    let arr = [91, 92]
    for (let i = 0; i < 5; i++) {
      let playerVal = Math.floor(Math.random() * (max - min + 1) + min)
      while (arr.includes(playerVal)) {
        playerVal = Math.floor(Math.random() * (max - min + 1) + min)
      }
      arr.push(playerVal)
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

  const viewOpponent = () => {
    if (players) {
      // POST to db w/team
      history.push({
        pathname: '/view-opponent',
        state: { userPlayers: players, teamName: teamName },
      })
    }
  }

  return (
    <>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h1>{teamName}'s Squad</h1>
      </div>
      <Game>
        {players.map((player) => (
          <Card player={player} key={player.player_id} />
        ))}
      </Game>
      <ViewOpponent>
        <Button btnText='View Opponent' onClick={viewOpponent} />
      </ViewOpponent>
    </>
  )
}

export default PickTeam

const Game = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  /* just in case i want to go back to columns overall */
  /* align-items: center;
  justify-items: center;

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
`

const ViewOpponent = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`
