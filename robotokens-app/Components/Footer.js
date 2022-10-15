import React from 'react'
import styled from 'styled-components'
import {IconContext} from "react-icons";
import { SiFacebook, SiInstagram, SiTwitter} from "react-icons/si";
import logo from "../public/logo.png"
import Link from 'next/link';

const Footer = () => {
  
  return (
      <Foot>

        <Container>
          <Col>
            <Title>RoboTokens</Title>
            <Text><Link href="./">TikTok</Link></Text>
            <Text><Link href="./">Instagram</Link></Text>
            <Text><Link href="./">Twitter</Link></Text>
            <Text><Link href="./">Facebook</Link></Text>
          </Col>

          <Col>
            <Title>More</Title>
            <Text><Link href="./">About Us</Link></Text>
            <Text><Link href="./">Blog</Link></Text>
          </Col>

          <Col>
            <Title>Join Us</Title>
            <Text><Link href="./">Careers</Link></Text>
            <Text><Link href="./">Make A Suggestion</Link></Text>
          </Col>

          <Col>
            <Title>Learn</Title>
            <Text><Link href="./">Cryptocurrencies</Link></Text>
            <Text><Link href="./">Blockchain</Link></Text>
          </Col>

        </Container>
          
          <Bottom>
            <Image2
              src = "/logo.png"
              alt="logo"
              width={50}
              height={50}
            />
            <Text2>© 2022 RoboTokens. All Rights Reserved</Text2>
          </Bottom>
      
      </Foot>
  )
}

const Foot = styled.div`
  box-sizing: border-box;
  background-color: #B3B3B3;
  color: white;
  padding: 8vw;
  padding-bottom: 5vw;
`
const Image2 = styled.img`
`

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 220px;
  margin-bottom: 1vw;
`

const Title = styled.div`
  color: white;
  font-family: Impact;
  font-size: 25px;
  line-height: 200%;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  
  flex-direction: row;
  align-items: flex-end;
  // vertical-align: baseline;
`

const Col = styled.div`
  width: 200px;
  height: 200px;
  float: left;
  margin: 10px;
`
const Text = styled.div`
  color: white;
  font-weight: 300;
  font-size: 15px;
  line-height: 200%;
`

const Text2 = styled.div`
  color: white;
  font-weight: 300;
  font-size: 15px;
  height: fit-content;
  float: right;
`

export default Footer

