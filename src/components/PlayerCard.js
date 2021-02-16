import React from 'react'
import styled from 'styled-components'

const PlayerCard = () => {
  return (
    <SingleCard>
      <img src='https://i.imgur.com/jMsPGtd.jpg' />
    </SingleCard>
  )
}

export default PlayerCard

const SingleCard = styled.div`
  padding: 0.5rem;
  width: 300px;
`
