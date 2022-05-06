import {Image, Button, Container, ProgressBar, Card} from 'react-bootstrap';
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
        <h2>You have created a DAO for DIG game!</h2>
        Click open to navigate to your DAO.
        <Button className="custom-button" onClick={handleClick}>Open</Button>
    </div>);
}

function CreateDaoBuilder() {
    const [createdDAO, setCreatedDAO] = useState(false);

    return (
        <div className="game-dashboard">
            {createdDAO ? (<Success />) : 
            (<Button variant="primary" size="lg" className="custom-button" onClick={()=> setCreatedDAO(true)}>
               Create DAO
            </Button>)}
        </div>
    );
  }
  
  export default CreateDaoBuilder;

