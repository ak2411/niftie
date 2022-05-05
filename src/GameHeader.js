import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router';
import './css/GameHeader.css';
function GameHeader() {
    return (
      <Navbar variant="dark" className="custom-nav" fixed="top">
          <Container>
          {/* <Nav.Link href={process.env.PUBLIC_URL + "/message"} className="custom-nav-link">About</Nav.Link> */}
          <Navbar.Brand href={process.env.PUBLIC_URL + "/"} className="custom-brand">DIG Games.</Navbar.Brand>
          {/* <Nav.Link href={process.env.PUBLIC_URL + "/photos"} className="custom-nav-link">Join</Nav.Link> */}
          </Container>
      </Navbar>
    );
  }
  
  export default GameHeader;