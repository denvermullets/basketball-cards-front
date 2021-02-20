import React from 'react'
import styled from 'styled-components'

const PlayerCard = (props) => {
  const { playerImage } = props

  return (
    <SingleCard>
      <img src={playerImage} />
    </SingleCard>
  )
}

export default PlayerCard

const SingleCard = styled.div`
  padding: 0.5rem;
  width: 300px;
`
