import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
      <Foot>RoboTokens Facebook Twitter Instagram</Foot>
  )
}

export default Footer

const Foot = styled.div`
  justify-content:center; 
  box-sizing: border-box;
  margin: 0px;
  background-color: #B3B3B3;
  font: impact;
  color: white;
  display: inline-block;
  width: 100%;
  padding: 150px;
`