
/*****Bootstrap Import******/
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/*****Image import*****/
import userImage from './images/user.jpg'

function Students(){
  const studentData = [
    {
      name: 'Bryan Bartell',
      description: 'Check out my personal profile and group projects and have fun with it.',
      profileLink: '/bryan',
    },
    {
      name: 'Chad Martin',
      description: 'Check out my personal profile and group projects and have fun with it.',
      profileLink: '/chad',
    },
    {
      name: 'John Prado',
      description: 'Check out my personal profile and group projects and have fun with it.',
      profileLink: '/john',
    },
  ];


  return (
    <>
    <h1 className='flex justify-center mb-5'>Student Page</h1>
        {studentData.map((student, index) => (
        <Col lg={3} key={index} className='d-flex justify-center'>
          <Card style={{ width: '18rem' }} className='shadow mb-3'>
            <Card.Img variant="top" src={userImage} />
            <Card.Body>
              <Card.Title>{student.name}</Card.Title>
              <Card.Text className="d-none d-md-block">
                {student.description}
              </Card.Text>
              <Button variant="info" href={student.profileLink}>
                Go to Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
      {/* <Col lg={3}>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={userImage} />
          <Card.Body>
            <Card.Title>Bryan Bartell</Card.Title>
            <Card.Text>
              Check out my personal profile and group projects and have fun with it.
            </Card.Text>
            <Button variant="primary" href="/bryan">Go to Profile</Button>
          </Card.Body>
          </Card>
      </Col> */}
      {/* <Col lg={3}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={userImage} />
          <Card.Body>
            <Card.Title>Chad Martin</Card.Title>
            <Card.Text>
              Check out my personal profile and group projects and have fun with it.
            </Card.Text>
            <Button variant="primary" href="/chad">Go to Profile</Button>
          </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={userImage} />
          <Card.Body>
            <Card.Title>John Prado</Card.Title>
            <Card.Text>
              Check out my personal profile and group projects and have fun with it.
            </Card.Text>
            <Button variant="primary" href="/john">Go to Profile</Button>
          </Card.Body>
          </Card>
        </Col> */}
    </>
  );
}

export default Students