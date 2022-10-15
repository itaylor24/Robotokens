import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'

const Navbar = () => {
  function handleSubmit() {
    // e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <Header>
      <BtnHome href="./">
        <Image2
          src = "/logo.png"
          alt="logo"
          width={50}
          height={50}
        />
      </BtnHome>
      <Title href="./">RoboTokens</Title>
      <Btn1 href = "./wager">Invest</Btn1>
      <Btn2 href="./wager">Battle</Btn2>
      <Btn3 href="./create">Create</Btn3>
    </Header>
  )
}

const Header = styled.div`
  justify-content:center; 
  box-sizing: border-box;
  margin: 0px;
  background-color: #B3B3B3;
  font-family: 'Impact';
  color: white;
  display: inline-block;
  width: 100%;
  padding: 30px;
`

const BtnHome = styled.a`
`
const Image2 = styled.img`
  margin: 0px 15px 0px 0px;
`


const Title = styled.a`
  display:flex;
  horizontal-padding: 40px;
  margin: 0px;
  font-size: 50px;
  display: inline-block;
`

const Btn1 = styled.a`
  margin: 0px 0px 0px 10px;
  display: inline-block;
  float: right;
  background-color: #229F73;  
  font-family: 'Verdana';
  padding: 20px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: rgba(34, 159, 115, 0.3);
  }
`

const Btn2 = styled.a`
  margin: 0px 0px 0px 10px;
  display: inline-block;
  float: right;
  background-color: #BE0B29;
  font-family: 'Verdana';
  padding: 20px;
  color: white;
  border: none;
  &:hover {
    background-color: rgba(190, 11, 41, 0.3);
  }
  
`

const Btn3 = styled.a`
  margin: 0px 0px 0px 10px;
  display: inline-block;
  float: right;
  border: none;
  background-color: #3D80BB;
  font-family: 'Verdana';
  padding: 20px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: rgba(61, 128, 187, 0.3);
  }
`




export default Navbar