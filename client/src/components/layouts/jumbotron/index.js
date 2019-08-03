import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

const jumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Reel Review</h1>
          <p className="lead">Sign up to be a user and write your own review for any film or television show.</p>
          <p className="lead">
          <Button color="primary">Click Here to Sign up</Button>
        </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default jumbotron;