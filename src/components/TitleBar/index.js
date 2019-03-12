import React from 'react'
import styled from 'styled-components'

const TitleBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #253b55;
  padding-bottom: 1px;
  background: linear-gradient(
      to left,
      rgba(5, 0, 255, 1) 0%,
      rgba(223, 203, 19, 1) 25%,
      rgba(0, 255, 56, 1) 50%,
      rgba(121, 26, 179, 1) 75%,
      rgba(247, 33, 33, 1) 100%
    )
    left bottom #253b55 no-repeat;
  background-size: 100% 1px;
  font-weight: bold;
`

export default TitleBar
