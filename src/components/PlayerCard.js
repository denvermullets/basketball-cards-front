import React from 'react'
import styled from 'styled-components'

const PlayerCard = (props) => {
  const { playerImage } = props
  // 300w x 419h
  return (
    <SingleCard className='back'>
      <img src={playerImage} alt='player card' />
    </SingleCard>
  )
}

export default PlayerCard

const SingleCard = styled.div`
  padding: 0.5rem;
  width: 300px;
`
