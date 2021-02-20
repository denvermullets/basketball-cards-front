import React from 'react'
import styled from 'styled-components'

const SmallPlayerCard = (props) => {
  const { playerImage } = props
  // 300w x 419h
  return (
    <SingleCard>
      <img src={playerImage} alt='player card' />
    </SingleCard>
  )
}

export default SmallPlayerCard

const SingleCard = styled.div`
  padding: 0.5rem;
  width: 180px;
`
