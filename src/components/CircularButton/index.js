import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Circle = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: ${props => (props.active ? '#182636' : '#f4f4f4')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => (props.active ? '#ffffff' : '#2d2d2e')};
  font-size: 24px;
  position: realtive;
  cursor: pointer;
  opacity: ${props => (props.active ? 1 : 0.8)};
  transition: all 0.2s ease-out;
  -webkit-tap-highlight-color: transparent;
  ${props =>
    props.active
      ? `
      &:after{
  padding: 2px;
  display: block;
  white-space: pre;
  content: "${props.text}";
  font-size: 10px;}`
      : `
  &:hover {
    border: 2px solid #182636;
    background-color: #182636;
    color: #ffffff;
    opacity: 1;
  }`}
`
const CircularButton = props => (
  <Circle active={props.active} text={props.text}>
    <a href={props.target}>
      <FontAwesomeIcon icon={props.icon} />
    </a>
  </Circle>
)

export default CircularButton
