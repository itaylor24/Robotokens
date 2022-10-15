import styled from 'styled-components'
import React from 'react'
import ReactPlayer from 'react-player'
import robot from '../src/robot.gif'
import mit from '../src/mit.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    // <Obj>HELLO</Obj>
    // <ReactPlayer url='https://www.youtube.com/watch?v=wWgIAphfn2U' />
    // <video controls src={"/robot video ii.mp4"} />

    // Render a YouTube video player
    // <ReactPlayer
    //   url='videos/robot.mp4'
    // />
    // <img src={require('/videos/mit.jpg')} alt="loading..." />
    <img src={require('/src/mit.jpg').default} />
    // <Image src={mit} alt = ""/>
    

  )
}

const Obj = styled.div`
    display:flex; 
    justify-content:center;
    padding: 20px;
    margin: 0px;
    flex-direction: column;
`