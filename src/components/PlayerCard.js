import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const PlayerCard = (props) => {
  const { playerName } = props
  const [player, setPlayer] = useState('')

  const findPlayer = (player) => {
    fetch(`http://localhost:5000/api/v1/players/${player}`)
      .then((response) => response.json())
      .then((res) => setPlayer(res))
  }

  useEffect(() => {
    findPlayer(playerName)
  }, [])

  return (
    <SingleCard>
      <img src={player} />
    </SingleCard>
  )
}

export default PlayerCard

const SingleCard = styled.div`
  padding: 0.5rem;
  width: 300px;
`
