import React from 'react';
import { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import "./style.css";

class Header extends Component {
  
render () {

return (
<div className="header">

<div>
    <Jumbotron>
        <div className="jumbotron jumbotron-cover-image">
          <h1 className="display-2">Reel Review</h1>
          <p className="lead">Film and Television reviews from everyday people, not overpaid critics!</p>
          
        </div>
    
    </Jumbotron>
</div>
</div>
);
};
}

export default Header;