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
<<<<<<< HEAD
      <Btn4>Connect Wallet</Btn4>
      <Btn1 href = "./wager">Wager</Btn1>
      <Btn2 href="./findmatch">Battle</Btn2>
=======
      <Btn1 href = "./wager">Invest</Btn1>
      <Btn2 href="./wager">Battle</Btn2>
>>>>>>> 27985f3965734a6dcd66efca7125f5f6dc802e64
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
  height: 10vw;
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
  font-size: 4vw;
  color: white;
  display: inline-block;
`

const Btn1 = styled.button`
  margin: 0px 0px 0px 1.5vw;
  font-size: 1.5vw;
  border-radius: 5px;
  display: inline-block;
  float: right;
  background-color: #229F73;  
  font-family: 'Verdana';
  padding: 1.5vw;
  border: none;
  color: white;
  cursor: pointer;
<<<<<<< HEAD
  &:hover{
    transform: scale(1.1);
    border: 3px double black;
=======
  &:hover {
    background-color: rgba(34, 159, 115, 0.3);
>>>>>>> 27985f3965734a6dcd66efca7125f5f6dc802e64
  }
`

const Btn2 = styled.button`
  margin: 0px 0px 0px 1.5vw;
  display: inline-block;
  font-size: 1.5vw;
  border-radius: 5px;
  float: right;
  background-color: #BE0B29;
  font-family: 'Verdana';
  padding: 1.5vw;
  color: white;
  border: none;
<<<<<<< HEAD
  cursor: pointer;
  &:hover{
    transform: scale(1.1);
    border: 3px double black;
=======
  &:hover {
    background-color: rgba(190, 11, 41, 0.3);
>>>>>>> 27985f3965734a6dcd66efca7125f5f6dc802e64
  }
`

const Btn3 = styled.button`
  margin: 0px 0px 0px 1.5vw;
  font-size: 1.5vw;
  border-radius: 5px;
  display: inline-block;
  float: right;
  border: none;
  background-color: #3D80BB;
  font-family: 'Verdana';
  padding: 1.5vw;
  color: white;
  cursor: pointer;
<<<<<<< HEAD
  &:hover{
    transform: scale(1.1);
    border: 3px double black;
  }
`
const Btn4 = styled.button`
  margin: 0px 0px 0px 1.5vw;
  font-size: 1.5vw;
  border-radius: 5px;
  display: inline-block;
  float: right;
  border: none;
  background-color: #cca739;
  font-family: 'Verdana';
  padding: 1.5vw;
  color: white;
  cursor: pointer;
  &:hover{
    transform: scale(1.1);
    border: 3px double black;
  }
`
const BtnHome = styled.a`
`
const Image2 = styled.img`
  margin: 0px 1.5vw 0px 0px;
  &:hover{
    transform: scale(1.1);
    transition: all 0.5s ease;
=======
  &:hover {
    background-color: rgba(61, 128, 187, 0.3);
>>>>>>> 27985f3965734a6dcd66efca7125f5f6dc802e64
  }
`


export default Navbar