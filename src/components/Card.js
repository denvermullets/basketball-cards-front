import React, { useState } from 'react'
import styled from 'styled-components'
import CardFront from './CardFront'
import PlayerCard from './PlayerCard'
import './Card.css'

const Card = (props) => {
  const [flip, setFlip] = useState(false)
  const { image_url, player_id } = props.player

  return (
    <CardBase
      className={`both-cards ${flip ? 'flipped' : ''}`}
      onClick={() => setFlip(true)}
    >
      <CardFront />
      <PlayerCard
        playerImage={image_url}
        key={player_id}
        stats={props.player}
      />
    </CardBase>
  )
}

export default Card

const CardBase = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;
  place-items: center;

  &.flipped {
    .front {
      transform: rotateY(180deg);
    }
    .back {
      transform: rotateY(0deg);
    }
  }

  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: -webkit-transform ease 500ms;
  transition: transform ease 500ms;
`
