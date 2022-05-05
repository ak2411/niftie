import {Image, Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hero from './images/home-bg.png';
import './css/Home.css';

function Home() {
    return (
        <div className="home">
            <Image className="hero-img" src={hero}/>
            <div className="hero-text">
                <h1>Guilds-as-a-service</h1>
                <p>Niftie helps Web3 game developers to build, retain, and grow their own communities with minimal effort, quickly.</p>
                <Container>
                <Button variant="primary" size="lg" className="custom-button">
                Create DAO Builder
                </Button>
                <Button variant="primary" size="lg" className="custom-button">
                Open your DAO Builder
                </Button>
                </Container>
                </div>
        </div>
    );
  }
  
  export default Home;