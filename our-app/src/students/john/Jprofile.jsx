
import './Jprofile.css'
/*****Bootstrap imports*****/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/*****Linked Files imports*****/
import LinkedinNavbar from './LinkedinNavbar.jsx'
import LinkedinBody from './LinkedinBody.jsx'

function Jprofile(){

  return (
    <>
      <Container fluid>
          <Row>
              <LinkedinNavbar/>
          </Row>
          <Row>
            <LinkedinBody/>
          </Row>
      </Container>
         
        
    </>
  );
}

export default Jprofile