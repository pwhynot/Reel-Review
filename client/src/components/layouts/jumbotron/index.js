import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

//import userSignUp from "../../pages/userSignUp";

const jumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Reel Review</h1>
          <p className="lead">Film and Television reviews and ratings from everyday people, not overpaid movie critics!</p>
          <p className="lead">
          
        </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default jumbotron;