import {Image, Button, Container, ProgressBar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hero from './images/game-bg.png';
import './css/GameDashboard.css';

function GameDashboard() {
    return (
        <div className="game-dashboard">
            <Container>
                <h3> DIG Fighters</h3>
                <ProgressBar now='40' label={`${40}%`} visuallyHidden/>
            </Container>
            <Container>
                <h3> Activities</h3>
            </Container>
        </div>
    );
  }
  
  export default GameDashboard;

