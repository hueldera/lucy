import React from "react";
import styled from "styled-components";

const Title = styled.div`
  &:after {
    content: "";

    margin-top: 5px;
    width: 15%; /* or 100px */
    border-bottom: 1px solid #514b9b;
    display: block;
    position: absolute;
  }
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 24px;
  padding: 5px;
  height: 70px;
`;
export default Title;
