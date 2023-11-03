
import './LinkedinBody.css'
/*****Bootstrap import ****/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

/*****React Icon import ****/
import { FaUser, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

function LinkedinBody() {
  return (
     <>
        <Card car>
          <Card.Header>
          <img id="background-img" src="https://media.licdn.com/dms/image/D4D16AQFBQ1kD7EtQZw/profile-displaybackgroundimage-shrink_350_1400/0/1698367328044?e=1704326400&v=beta&t=HN3EcY3oX2KrOZixvxkGIf2BaLDwi7bZ9JWeHPm71dM" alt="" />
          <Image id="user-img" src="src/images/user.jpg" roundedCircle />

          </Card.Header>

          </Card>

        
     </>
        
    // <Container>
    //   <Row className="mt-4">
    //     <Col md={4}>
    //       <Image id="user-img" src="src/images/user.jpg" roundedCircle />
    //     </Col>
    //     <Col md={8}>
    //       <h2>John Prado</h2>
    //       <p>Front-End Developer | Open to Opportunities</p>
    //       <Button variant="primary">Connect</Button>
    //     </Col>
    //   </Row>

  );
}

export default LinkedinBody;
