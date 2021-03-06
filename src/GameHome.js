import {Image, Button, Container} from 'react-bootstrap';
import { createRoutesFromChildren, Link } from 'react-router-dom';
import { InjectedConnector } from '@web3-react/injected-connector';
import { Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import hero from './images/game-bg.png';
import './css/GameHome.css';

export const injected = new InjectedConnector();

function GameHome(pageProp) {

    useEffect(() => {
        if (typeof window.ethereum != "undefined") {
            pageProp.setHasMetamask(true);
        }
    });
    const {active,
           activate,
           chainId,
           account,
           library: provider
    } =useWeb3React();

    async function connect(){
        if (typeof window.ethereum != 'undefined') {
            try{
                await activate(injected);
                pageProp.setHasMetamask(true);
            } catch (e) {
                console.log(e);
            }
        }
    }

    return (
        <div className="game-home">
            <div className="game-hero-text-container">
                <h2>Welcome to the DIG DAO builder!</h2>
                <p>Create your Web 3.0 community within 2 minutes.</p>
                {pageProp.hasMetamask ? (
                    active ? (
                        <Navigate to="/DIG/create-dao"/>
                    ) : (                
                        <Button variant="primary" size="lg" className="custom-button" onClick={() => connect()}>
                        Connect Metamask
                        </Button>)
                ):(
                    "please install metamask"
                )}
            </div>
            <div className="game-hero-image">
            <Image className="game-hero-img" src={hero}/>
            </div>
        </div>
    );
  }
  
  export default GameHome;

