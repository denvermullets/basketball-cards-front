import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../components/Button'
import styled from 'styled-components'
import SmallPlayerCard from '../components/SmallPlayerCard'
import Scoreboard from '../components/Scoreboard'

const Matchup = () => {
  const history = useHistory()
  const { teamName, userPlayers, opponents, winner } = history.location.state

  const restart = () => {
    history.push({
      pathname: '/',
      state: { userPlayers: null, teamName: null, opponents: null },
    })
  }

  return (
    <>
      {console.log(winner)}
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h1>{winner === 'player' ? teamName : 'Jordan Michael'}'s Squad won</h1>
      </div>
      <Game>
        {winner === 'player'
          ? userPlayers.map((player) => (
              <SmallPlayerCard
                player={player}
                key={player.player_id}
                playerImage={player.image_url}
              />
            ))
          : opponents.map((player) => (
              <SmallPlayerCard
                player={player}
                key={player.player_id}
                playerImage={player.image_url}
              />
            ))}
      </Game>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h2>{winner === 'player' ? 'Jordan Michael' : teamName}'s Squad</h2>
      </div>
      <Game>
        {winner === 'player'
          ? opponents.map((player) => (
              <SmallPlayerCard
                player={player}
                key={player.player_id}
                playerImage={player.image_url}
              />
            ))
          : userPlayers.map((player) => (
              <SmallPlayerCard
                player={player}
                key={player.player_id}
                playerImage={player.image_url}
              />
            ))}
      </Game>
      <Scoreboard />
      <ViewOpponent>
        <Button btnText='Play Again' onClick={restart} />
      </ViewOpponent>
    </>
  )
}

export default Matchup

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
