import Head from 'next/head'
import Image from 'next/image'
<<<<<<< HEAD
import Section2 from '../Components/Section2'
import robot from '../public/robot4.gif'
=======
import robot from '../public/robot4.gif'
import mit from '../public/mit.jpg'
>>>>>>> 27985f3965734a6dcd66efca7125f5f6dc802e64
import styled from 'styled-components'

export default function Home() {
  return (
<<<<<<< HEAD
    <>
        <Black>
      <Container>
        <ImgContainer>
          <Image
=======
    // <div>HELLO</div>
    // <img src={require('/Image.png').default} />
    // <img src={'/robot.gif'} />
    // <img src={'/Image.png'} />
    <Black>
      <Container>

        <ImgContainer>
          <Image
              // src="https://www.mit.edu/files/images/201807/15656704711_00457bd2c9_b_1.jpg"
              // src = "https://example.com/test"
>>>>>>> 27985f3965734a6dcd66efca7125f5f6dc802e64
              src = "/robot4.gif"
              alt="robot"
              layout="responsive"
              width={500}
              height={300}
<<<<<<< HEAD
=======
              // opacity={0.5}
>>>>>>> 27985f3965734a6dcd66efca7125f5f6dc802e64
          />
        </ImgContainer>

        <Text2>
          Welcome to RoboTokens
        </Text2>

      </Container>
    </Black>
<<<<<<< HEAD
        <Section2 />
    </>
=======

    // <Image src={'https://www.example.com/banner.jpg'} alt='Home Page' width={100} height={100} />
    
  // backgroundImage: /robot2.gif;
>>>>>>> 27985f3965734a6dcd66efca7125f5f6dc802e64
  )
}

const Text2 = styled.div`
  opacity: 1;
  color: white;
  font-family: Impact;
  font-size: 100px;
  text-align: center;
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
<<<<<<< HEAD
`
=======
`
>>>>>>> 27985f3965734a6dcd66efca7125f5f6dc802e64
