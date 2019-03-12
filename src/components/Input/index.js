import React, { Fragment } from 'react'
import styled from 'styled-components'

const InputBox = styled.div`
  margin-bottom: 10px;
  max-width: 80%;
  min-width: 60%;
  padding-bottom: 5px;
  -webkit-tap-highlight-color: transparent;
  background: linear-gradient(
      to left,
      rgba(5, 0, 255, 1) 0%,
      rgba(223, 203, 19, 1) 25%,
      rgba(0, 255, 56, 1) 50%,
      rgba(121, 26, 179, 1) 75%,
      rgba(247, 33, 33, 1) 100%
    )
    left bottom transparent no-repeat;
  background-size: 100% 1px;
  font-weight: bold;
  h1 {
    font-weight: bolder;
    font-size: 14px;
    color: #f4f4f4;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }

  h1 span {
    margin-top: 3px;
    font-weight: lighter;
    font-size: 10px;
    color: #7d7d7d;
    text-align: right;
  }
  p {
    padding: 5px;
    color: #9b9b9b;
    font-size: 12px;
    text-align: justify;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  a {
    text-decoration: none;
    outline: none;
    border: none;
  }
`

const Input = props => (
  <InputBox>
    <a href={props.target}>
      <h1>
        {props.title}
        <span>{props.count} pessoas fizeram essa prova</span>
      </h1>
      <p>{props.description}</p>
    </a>
  </InputBox>
)
export default Input
