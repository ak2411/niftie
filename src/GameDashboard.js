import {Image, Button, Container, ProgressBar, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hero from './images/game-bg.png';
import './css/GameDashboard.css';

import gold from './images/gold.png';
import assets from './images/assets.png';
import user1 from './images/user1.png';
import user2 from './images/user2.png';
import user3 from './images/user3.png';
import marketplace from './images/marketplace.png';



function GameDashboard() {
    return (
        <div className="game-dashboard">
            <Container>
                <h3> DIG Fighters</h3>
                <Container className="overarching-card-grid">
                <Container className="card-grid left-cards">
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
                        <Card.Subtitle>Upcoming Exclusive Item Drop</Card.Subtitle>
                        <div className="card-item-row"><Image className="gold-img" src={gold}/>
                        <div id="exclusive-item-drop-text"><Card.Title>175 tokens <br/><text id="exclusive-item-drop-text-grey">limited 2 per member</text></Card.Title></div></div>
                    </Card.Body>
                </Card>
                </Container>
                <Container className="card-grid left-cards">
                <div style={{display:"flex", gap: "10px"}}>
                <Card>
                    <Card.Body>
                        <Card.Subtitle>Assets</Card.Subtitle>
                        <Image className="assets-img" src={assets}/>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Subtitle>Treasury</Card.Subtitle>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Title>156,000</Card.Title>shared tokens
                    </Card.Footer>
                </Card>
                </div>
                <Card>
                    
                    <Image className="marketplace-img" src={marketplace}/>
                    <Card.ImgOverlay><Card.Body></Card.Body>
                    <Card.Footer>
                        <Button className="custom-button">Open Marketplace</Button>
                    </Card.Footer></Card.ImgOverlay>
                    
                </Card>
                </Container>
                <Container className="card-grid right-cards">
                <Card>
                    <Card.Body>
                        <Card.Subtitle>Leaderboard</Card.Subtitle>
                        <div className="card-item-row leaderboard">
                            <Image className="user-img" src={user1}/>
                            <div className="leaderboard-text">Mis29850yyy
                                <text id="exclusive-item-drop-text-grey">l150 bounties</text>
                            </div>
                        </div><br/>
                        <div className="card-item-row leaderboard">
                            <Image className="user-img" src={user2}/>
                            <div className="leaderboard-text">3922facetuu
                                <text id="exclusive-item-drop-text-grey">125 bounties</text>
                            </div>
                        </div><br/>
                        <div className="card-item-row leaderboard">
                            <Image className="user-img" src={user3}/>
                            <div className="leaderboard-text">Lmask2033_0
                                <text id="exclusive-item-drop-text-grey">100 bounties</text>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                </Container>
            </Container>
            </Container>
            <br/>
            <Container>
                <h3> Activities</h3>
            </Container>
        </div>
    );
  }
  
  export default GameDashboard;

