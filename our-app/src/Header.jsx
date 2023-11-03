

import './Header.css'

/******* Bootstrap imports *********/
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <Row>
      <Navbar bg="dark" data-bs-theme="dark" id='custom-shadow' className='mb-3'>
          <Container>
            <Navbar.Brand href="/"><i className='fa fa-codepen me-3 px-3' style={{fontSize:25}}></i></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/students">STUDENTS</Nav.Link>
              <Nav.Link href="/assignments">ASSIGNMENTS</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
    </Row>
  );
}

export default Header;