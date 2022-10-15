import React from 'react'
import styled from 'styled-components'
import CreateBlockCode from '../Components/BlockCode/CreateBlockCode'

const create = () => {

  return (
    <div>
      <MainTitle>Create A RoboToken</MainTitle>
      <CreateBlockCode  />
    </div>

  )

}

const MainTitle = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 3.5vw;
 margin: 2vw;
`


export default create