import {Image, Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hero from './images/home-bg.png';
import GameHome from './GameHome';
import GameHeader from './GameHeader';


function GameIndex() {
    return (
        <>
        <GameHeader />
        <GameHome />
        </>
    );
  }
  
  export default GameIndex;