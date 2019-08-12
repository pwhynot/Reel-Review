import React from 'react';
import { Jumbotron } from 'reactstrap';
import './style.css';


const jumbotron = (props) => {

  return (
    <div>
      <Jumbotron>
        <div className="jumbotron jumbotron-cover-image">
          <h1 className="display-2">Reel Review</h1>
          <p className="lead">Film and Television reviews from everyday people, not overpaid critics!</p>
          
        </div>
    
      </Jumbotron>
    </div>
  );
};

export default jumbotron;