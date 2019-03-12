import React, { Fragment } from 'react'
import styled from 'styled-components'
import CircularButton from '../CircularButton'

const MenuContent = styled.div`
  height: 30%;
  padding: 20px;
  background-color: #182636;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /*background: url(${props => props.background}) center;*/
  flex-wrap: wrap;
`

const CircularMenu = props => (
  <Fragment>
    <MenuContent background={props.background}>
      {props.items.map(item => {
        return (
          <CircularButton
            text={item.text}
            icon={item.icon}
            target={item.target}
            active={item.active}
            target={item.target}
          />
        )
      })}
    </MenuContent>
  </Fragment>
)

export default CircularMenu
