

/*****Navbar imports*****/
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './LinkedinNavbar.css'

/*******Icon imports *******/
import {FaLinkedin, FaSearch, FaHome} from 'react-icons/fa';
import {FaPeopleGroup, FaBagShopping, FaBell} from 'react-icons/fa6'
import {AiFillMessage} from 'react-icons/ai'

function LinkedinNavbar(){

  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className='shadow mb-1 d-flex justify-content-between'>
          <Container>
            <Navbar.Brand href="/" className='me-4'><FaLinkedin color='blue' size={35} /></Navbar.Brand>
            <Nav className='me-3'>
              <Nav.Link href="#"><FaSearch size={24}/></Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link className="custom-nav" href="#"><FaHome size={25}/></Nav.Link>
              <Nav.Link className="custom-nav" href="#"><FaPeopleGroup size={25}/></Nav.Link>
              <Nav.Link className="custom-nav" href="#"><FaBagShopping size={25}/></Nav.Link>
              <Nav.Link className="custom-nav" href="#"><AiFillMessage size={25}/></Nav.Link>
              <Nav.Link className="custom-nav" href="#"><FaBell size={25}/></Nav.Link>
            </Nav>
          </Container>
      </Navbar>
    </>

  );
}

export default LinkedinNavbar

