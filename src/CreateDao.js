import {Image, Button, Container, ProgressBar, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hero from './images/game-bg.png';
import './css/GameDashboard.css';

function CreateDao() {
    return (
        <div className="game-dashboard">
            <Button variant="primary" size="lg" className="custom-button">
               Create DAO
                </Button>
        </div>
    );
  }
  
  export default CreateDao;

