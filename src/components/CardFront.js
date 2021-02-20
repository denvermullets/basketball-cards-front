import React from 'react'
import styled from 'styled-components'

const CardFront = () => {
  return (
    <Card className='front'>
      <Text>Click to reveal player</Text>
    </Card>
  )
}

export default CardFront

const Card = styled.div`
  margin: 0.5rem;
  width: 300px;
  height: 419px;
  box-shadow: inset 0px 0px 0px 20px #9d7844;
  background-color: black;
`

const Text = styled.p`
  text-align: center;
  color: white;
  position: relative;
  top: 40%;
`
