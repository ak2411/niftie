import {Image, InputGroup, FormControl, Button, Container, ProgressBar, Card} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import hero from './images/game-bg.png';
import './css/GameDashboard.css';
import {useState} from 'react';



function Success() {
    let navigate = useNavigate(); 
    const handleClick = () =>{ 
        navigate(process.env.PUBLIC_URL + "/DIG")
    }
    return(<div>
        <h2>Your DAO builder is generated successfully!</h2>
        Click open to navigate to your game's DAO builder.
        <Button className="custom-button" onClick={handleClick}>Open</Button>
    </div>);
}

function CreateDaoBuilder() {
    const [createdDAO, setCreatedDAO] = useState(false);

    return (
        <div className="game-dashboard"  style={{display:"flex", gap:"10px"}}>
            {/* pageProp.hasMetamask && active */}
            {(true) ? (createdDAO) ? (<Success />) : (
                <div><h2>Create DAO Builder</h2>
                <InputGroup>
                    <InputGroup.Radio aria-label="Radio button for following text input" />
                    Allow gamers to import existing Discord channel. </InputGroup>
                <Card style={{padding: "10px"}}>
                    <Card.Title>Basic information</Card.Title>
                    <Card.Body>
                    <InputGroup>
                    <InputGroup.Text id="basic-addon1">Game Name: </InputGroup.Text>
                    <FormControl
                placeholder="name"
                aria-label="name"
                aria-describedby="name"
            /></InputGroup>
                    <InputGroup>
                    <InputGroup.Text id="basic-addon1">Token Name: </InputGroup.Text>
                    <FormControl
                placeholder="Size"
                aria-label="Size"
                aria-describedby="size"
            /></InputGroup>
                <InputGroup><InputGroup.Text id="basic-addon1">Color Scheme </InputGroup.Text>
                        <FormControl
                    placeholder="admin"
                    aria-label="admin"
                    aria-describedby="admin"
                /></InputGroup>
                </Card.Body>

                </Card>
                <Card  style={{padding: "10px"}}>
                    <Card.Title>Entry Requirements</Card.Title>
                    <Card.Body>
                    <InputGroup>
                    <InputGroup.Checkbox aria-label="Radio button for following text input" />
                    Require new members join your DAO after pass the voting%? </InputGroup>
                    <InputGroup>
                    <InputGroup.Checkbox aria-label="Radio button for following text input" />
                    Allow admins to admit new members directly?</InputGroup>
                    </Card.Body>
                </Card>
            </div>
            ):("Please Connect a MetaMask Wallet!")}
            <div className="game-dashboard">
            {createdDAO ? (!<Success />) : 
                <div style={{display:"flex", gap:"10px"}}>
                <Button variant="primary" size="lg" className="custom-button" style={{backgroundColor:"grey"}} onClick={()=> setCreatedDAO(true)}>
                    Create DAO
                </Button>
                <Button variant="primary" size="lg" className="custom-button" style={{backgroundColor:"grey"}}>
                    Cancel
                </Button>
            </div>
            }
            </div>
        </div>
    );
  }
  
  export default CreateDaoBuilder;

