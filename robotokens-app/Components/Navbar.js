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
      <Link href="./"><Title >RoboTokens</Title></Link>
      <Btn4>Connect Wallet</Btn4>
      <Link href = "./wager"><Btn1 >Wager</Btn1></Link>
      <Link href="./battle"><Btn2 > Battle</Btn2></Link>
      <Link href="./create"><Btn3 >Create</Btn3></Link>
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

const Title = styled.a`
  display:flex;
  horizontal-padding: 40px;
  margin: 0px;
  font-size: 4vw;
  color: white;
  cursor: pointer;
  display: inline-block;
`

const Btn1 = styled.button`
  margin: 0px 0px 0px 1vw;
  font-size: 1vw;
  border-radius: 3px;
  display: inline-block;
  float: right;
  background-color: #229F73;  
  font-family: 'Verdana';
  padding: 1.5vw;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: rgba(34, 159, 115, 0.3);
  }
`

const Btn2 = styled.button`
  margin: 0px 0px 0px 1vw;
  display: inline-block;
  font-size: 1vw;
  border-radius: 3px;
  float: right;
  background-color: #BE0B29;
  font-family: 'Verdana';
  padding: 1.5vw;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(190, 11, 41, 0.3);
  }
`

const Btn3 = styled.button`
  margin: 0px 0px 0px 1vw;
  font-size: 1vw;
  border-radius: 3px;
  display: inline-block;
  float: right;
  border: none;
  background-color: #3D80BB;
  font-family: 'Verdana';
  padding: 1.5vw;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: rgba(61, 128, 187, 0.3);
  }
`
const Btn4 = styled.button`
  margin: 0px 0px 0px 1vw;
  font-size: 1vw;
  border-radius: 3px;
  display: inline-block;
  float: right;
  border: none;
  background-color: #cca739;
  font-family: 'Verdana';
  padding: 1.5vw;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: rgba(204, 167, 57, 0.3);
  }
`
const BtnHome = styled.a`
cursor: pointer;
`
const Image2 = styled.img`
  margin: 0px 1vw 0px 0px;
  &:hover{
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`


export default Navbar