import React, { useState, useCallback, useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import GlobalStyles from '../styles/GlobalStyles'
import styled from 'styled-components'
import { Unity, useUnityContext} from "react-unity-webgl";

const MatchScreen = (props) => {

    const {scripts, updateGameOver} = props;
    const { isLoaded } = useUnityContext();

    const [isGameOver, setIsGameOver] = useState(false);
    const [winner, setWinner] = useState(null);


    const { unityProvider, addEventListener, removeEventListener, sendMessage } = useUnityContext({
      loaderUrl: "/assets/RoboTokens_Draft1.loader.js",
      dataUrl: "/assets/RoboTokens_Draft1.data",
      frameworkUrl: "/assets/RoboTokens_Draft1.framework.js",
      codeUrl: "/assets/RoboTokens_Draft1.wasm",
    });

    

    const handleGameOver = useCallback((winner) => {

        setIsGameOver(true);
        setWinner(winner)
        updateGameOver(winner);
        
      }, []);

      useEffect(() => {
        if(isLoaded){
            console.log("HEY"); 
            sendMessage("GameController", "StartMech1", [['run(30),throw(50),wait(1),turn(30)']]);
            sendMessage("GameController", "StartMech2", [['run(30),throw(50),wait(1),turn(30)']]);

        }else{
            console.log("addedListener"); 
            addEventListener("GameOver", handleGameOver);

            return () => {
            removeEventListener("GameOver", handleGameOver);
            };
        }
        

      }, [addEventListener, removeEventListener, handleGameOver, isLoaded]);


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