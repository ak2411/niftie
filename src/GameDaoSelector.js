import {Image, Button, Container, ProgressBar, Card, InputGroup} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import hero from './images/game-bg.png';
import './css/GameDaoSelector.css';
import {useState} from 'react';


function GameDaoSelector(pageProp) {
    const [createdDAO, setCreatedDAO] = useState(false);
    let navigate = useNavigate(); 
    const backToLogin = () =>{ 
        navigate(process.env.PUBLIC_URL + "/DIG/DigFighters")
    }
    return (
        <div className="game-selector">
        {(pageProp.hasMetamask)?(
        <div  style={{display:"flex", gap:"10px", padding:"100px"}}>
        <Card  style={{minWidth:"100px"}}>
            <Card.Body>
            <Card.Subtitle>NEW</Card.Subtitle>
            <Card.Title> Dancing DIG</Card.Title>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary" size="lg" className="custom-button" onClick={backToLogin}>
                Enter
                </Button>
            </Card.Footer>
        </Card>
        <Card  style={{minWidth:"100px"}}>
            <Card.Body>
            <Card.Title>Dig Fighters</Card.Title>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary" size="lg" className="custom-button" onClick={backToLogin}>
                Enter
                </Button>
            </Card.Footer>
        </Card>
        </div>
    ):(<><br/><br/><br/>Please Connect a MetaMask Wallet!
    <br/>
    <Button variant="primary" size="lg" className="custom-button" onClick={backToLogin}>
    Login
</Button></>)}
        </div>
    );
  }
  
  export default GameDaoSelector;

