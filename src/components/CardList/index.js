import React, { Fragment } from 'react'
import styled from 'styled-components'
import Card from '../Card'
const ListContent = styled.div`
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /*background: url(${props => props.background}) center;*/
  flex-wrap: wrap;
`

const CardList = props => (
  <ListContent>
    <Card
      title='Desenvolvimento: Programador Web'
      count='5'
      description='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'
      target='teste'
    />
    <Card
      title='Desenvolvimento: Programador Web'
      count='5'
      description='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'
      target='teste'
    />
  </ListContent>
)

export default CardList
