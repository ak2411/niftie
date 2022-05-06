import {Image, Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hero from './images/home-bg.png';
import {Routes ,Route} from 'react-router-dom';
import './css/GameIndex.css';

import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import GameHome from './GameHome';
import GameHeader from './GameHeader';
import GameDashboard from './GameDashboard';
import GameDaoSelector from './GameDaoSelector';

import CreateDao from './CreateDao';
import { useState, useEffect } from 'react';

const getLibrary = (provider) => {
    return new Web3Provider(provider);
}

function GameIndex(pageProp) {
    const [hasMetamask, setHasMetamask] = useState(false);
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
        <GameHeader {...pageProp}/>
        <Routes>
            <Route path={`/DigFighters`} element={<GameDashboard {...pageProp}/>} />
            <Route path={`/`} element={<GameHome setHasMetamask = {setHasMetamask} hasMetamask = {hasMetamask} {...pageProp}/>} />
            <Route path={`/create-dao`} element={<CreateDao hasMetamask = {hasMetamask} {...pageProp} />}/>
            <Route path={`/home`} element={<GameDaoSelector hasMetamask = {hasMetamask} {...pageProp} />}/>
        </Routes>
        </Web3ReactProvider>
    );
  }
  
  export default GameIndex;