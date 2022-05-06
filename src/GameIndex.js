import {Image, Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hero from './images/home-bg.png';
import { Routes ,Route} from 'react-router-dom';
import './css/GameIndex.css';

import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import GameHome from './GameHome';
import GameHeader from './GameHeader';
import GameDashboard from './GameDashboard';
import CreateDao from './CreateDao';

const getLibrary = (provider) => {
    return new Web3Provider(provider);
}

function GameIndex({pageProp}) {
    return (
        <Web3ReactProvider>
        <GameHeader {...pageProp}/>
        <GameHome {...pageProp}/>
        </Web3ReactProvider>
    );
  }
  
  export default GameIndex;