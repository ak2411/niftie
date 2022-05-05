import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router';

function Header() {
    return (
      <Navbar variant="dark" className="custom-nav" fixed="top">
          <Container>
          {/* <Nav.Link href={process.env.PUBLIC_URL + "/message"} className="custom-nav-link">About</Nav.Link> */}
          <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>Niftie.</Navbar.Brand>
          {/* <Nav.Link href={process.env.PUBLIC_URL + "/photos"} className="custom-nav-link">Join</Nav.Link> */}
          </Container>
      </Navbar>
    );
  }
  
  export default Header;