import {Image, Button, Container, ProgressBar, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hero from './images/game-bg.png';
import './css/GameDashboard.css';

function GameDashboard() {
    return (
        <div className="game-dashboard">
            <Container>
                <h3> DIG Fighters</h3>
                <Container className="card-grid">
                <Card>
                    <Card.Body>
                        <Card.Subtitle className='card-title'>Voting</Card.Subtitle>
                        <Card.Title>Set the minimum number of admins to 3, maximum can be based on the size of the DAO.</Card.Title>
                        <div><ProgressBar now='60' label={`${60}%`} visuallyHidden/> Yes</div>
                        <div><ProgressBar now='40' label={`${40}%`} visuallyHidden/> <p>No</p> </div>
                        
                        <Card.Subtitle>Voting will expire in 3 days 21 hours</Card.Subtitle>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Subtitle>Treasury</Card.Subtitle>
                        <Card.Title>156,000</Card.Title>shared tokens
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Subtitle>Upcoming Exclusive Item Drop</Card.Subtitle>
                        <Card.Title>156,000</Card.Title>shared tokens
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Subtitle>Treasury</Card.Subtitle>
                        <Card.Title>156,000</Card.Title>shared tokens
                    </Card.Body>
                </Card>
            </Container>
            </Container>
            <Container>
                <h3> Activities</h3>
            </Container>
        </div>
    );
  }
  
  export default GameDashboard;

