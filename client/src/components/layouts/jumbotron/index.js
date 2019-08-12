import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './style.css';


const jumbotron = (props) => {

  return (
    <div>
      <Jumbotron fluid>
        <div className="jumbotron jumbotron-cover-image">
        <Container fluid>
          <h1 className="display-3">Reel Review</h1>
          <p className="lead">Film and Television reviews from everyday people, not overpaid critics!</p>
          </Container>
        </div>
    
      </Jumbotron>
    </div>
  );
};

export default jumbotron;