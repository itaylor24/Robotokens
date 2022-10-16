import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import GlobalStyles from '../styles/GlobalStyles'
import styled from 'styled-components'
import { Unity, useUnityContext } from "react-unity-webgl";

const MatchScreen = (props) => {

    const {battleList} = props;

    const { unityProvider } = useUnityContext({
      loaderUrl: "/assets/RoboTokens_Draft1.loader.js",
      dataUrl: "/assets/RoboTokens_Draft1.data",
      frameworkUrl: "/assets/RoboTokens_Draft1.framework.js",
      codeUrl: "/assets/RoboTokens_Draft1.wasm",
    });


    return (
        <MatchScreenContainer>
            <Text2>
                MATCH STARTED
            </Text2>
            <UnityContainer>
                <Unity 
                    unityProvider={unityProvider} 
                    style={{ width: 800, height: 450}}
                    // style={{ height: 300}}
                />
            </UnityContainer>
        </MatchScreenContainer>
    )
}

const Text2 = styled.div`
    margin-bottom: 1vw;
`

const UnityContainer = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Impact;
  font-size: 4vw;
  width: fit-content;
  height: fit-content;

`

const MatchScreenContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  font-family: Impact;
  font-size: 4vw;
  flex-direction: column;
  margin-top: 8vw;
  margin-bottom: 8vw;
`


export default MatchScreen