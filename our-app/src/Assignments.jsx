
/****Bootstrap import*****/
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Assignments(){


  const assignmentData = [
    {
      title: 'Hangman',
      description: 'Hangman is a word-guessing game in which one player thinks of a word and the other player tries to guess it by suggesting letters while limited to a certain number of incorrect guesses.',
      playLink: '/hangman',
      collaborators: ['Bryan', 'Chad', 'John'],
    },
    {
      title: 'Pokemon',
      description: 'Play around with Pokemon API.',
      playLink: '/pokemon',
      collaborators: ['Bryan', 'Mason'],
    },
    {
      title: 'Guess A Number',
      description: 'Guess a Number between 100.',
      playLink: '/guessing-game',
      collaborators: ['John', 'Kate'],
    },
  ];

  return (
    <>
    <h1 className='flex justify-center mb-5'>Assignment Page</h1>
    <Row>
      {assignmentData.map((assignment, index) => (
        <Col lg ={3} key={index}>
            <Card  className="text-center">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>{assignment.title}</Card.Title>
                <Card.Text>{assignment.description}</Card.Text>
                <Button variant="success" href={assignment.playLink}>
                  Play
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                <div>
                  <strong>Collaborators</strong>
                </div>
                <div>
                  {assignment.collaborators.map((collaborator, i) => (
                    <Button key={i} variant="secondary me-1 mt-2" href={`/${collaborator}`}>
                      {collaborator}
                    </Button>
                  ))}
                </div>
              </Card.Footer>
            </Card>
        </Col>
         ))}
    </Row>
    
      {/* <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Hangman</Card.Title>
        <Card.Text>
            Hangman is a word-guessing game in which one player thinks of a word and the other player tries to guess it by          suggesting letters while limited to a certain number of incorrect guesses.
        </Card.Text>
        <Button variant="success" href='/hangman'>Play</Button>
      </Card.Body>
      <Card.Footer className="text-muted"> 
      <div>
      <strong>Collaborators</strong>
      </div>
      <div>
      <Button variant="secondary me-1 mt-2" href="/bryan">Bryan</Button>
      <Button variant="secondary me-1 mt-2" href="/chad">Chad</Button>
      <Button variant="secondary me-1 mt-2" href="/john">John</Button>
      </div>
      </Card.Footer>
      </Card> */}
    {/* <div>
      <Card className="text-center mt-5">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Pokemon</Card.Title>
        <Card.Text>
            Play around with pokemn API
        </Card.Text>
        <Button variant="success" href='/pokemon'>Play</Button>
      </Card.Body>
      <Card.Footer className="text-muted"> 
      <div>
      <strong>Collaborators</strong>
      </div>
      <div>
      <Button variant="secondary me-1 mt-2" href="/bryan">Bryan</Button>
      <Button variant="secondary me-1 mt-2">Mason</Button>
      </div>
      </Card.Footer>
      </Card>
    </div>
    <div>
      <Card className="text-center mt-5">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Guess A Number</Card.Title>
        <Card.Text>
            Guess a Number between 100
        </Card.Text>
        <Button variant="success" href='/guessing-game'>Play</Button>
      </Card.Body>
      <Card.Footer className="text-muted"> 
      <div>
      <strong>Collaborators</strong>
      </div>
      <div>
      <Button variant="secondary me-1 mt-2" href="/john">John</Button>
      <Button variant="secondary me-1 mt-2">Kate</Button>
      </div>
      </Card.Footer>
      </Card>
    </div> */}
      
    </>
  );
}

export default Assignments