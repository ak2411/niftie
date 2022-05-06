import {Image, Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hero from './images/home-bg.png';
import { Routes ,Route} from 'react-router-dom';
import './css/GameIndex.css';


import GameHome from './GameHome';
import GameHeader from './GameHeader';
import GameDashboard from './GameDashboard';
import CreateDao from './CreateDao';


function GameIndex() {
    return (
        <>
        <GameHeader />
        <Routes>
            <Route path={`/DigFighters`} element={<GameDashboard/>} />
            <Route path={`/`} element={<GameHome/>} />
            <Route path={`/create-dao`} element={<CreateDao/>} />
        </Routes>
        </>
    );
  }
  
  export default GameIndex;