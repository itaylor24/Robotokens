import Head from 'next/head'
import Image from 'next/image'
import Section2 from '../Components/Section2'
import robot from '../public/robot4.gif'
import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <Black>
        <Container>
          <ImgContainer>
            <Image
                src = "/robot4.gif"
                alt="robot"
                layout="responsive"
                width={500}
                height={300}
            />
          </ImgContainer>
          <TextHolder>
            <Text2>
              Welcome to RoboTokens
            </Text2>
            <Text3>
              Gotta Code 'em All
            </Text3>
          </TextHolder>

        </Container>
      </Black>
        <Section2 />
    </>
  )
}

const TextHolder = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
`

const Text3 = styled.div`
  margin: 1.5vw;
  font-size: 1.4vw;
`

const Text2 = styled.div`
  opacity: 1;
  color: white;
  font-family: Impact;
  font-size: 6vw;
`

const ImgContainer = styled.div`
  backgroundImage: /robot4.gif;
  opacity: 0.8;
`

const Container = styled.div`
  position: relative;
  text-align: center;
  color: white;
`

const Black = styled.div`
  background-color: black;
`
