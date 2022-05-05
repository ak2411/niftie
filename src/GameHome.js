import {Image, Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hero from './images/game-bg.png';
import './css/GameHome.css';

function GameHome() {
    return (
        <div className="game-home">
            <div className="game-hero-text-container">
                <h2>Welcome to the DIG DAO builder!</h2>
                <p>Create your Web 3.0 community within 2 minutes.</p>
                <Button variant="primary" size="lg" className="custom-button">
                Connect Metamask
                </Button>
            </div>
            <div className="game-hero-image">
            <Image className="game-hero-img" src={hero}/>
            </div>
        </div>
    );
  }
  
  export default GameHome;

