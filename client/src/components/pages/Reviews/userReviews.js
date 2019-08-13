import React, { Component } from 'react';
import axios from 'axios';


class userReviews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: {}
    };
  }

  componentDidMount() {
    axios.get('/api/reviews/'+this.props.match.params.id)
      .then(res => {
        this.setState({ reviews: res.data });
        console.log(this.state.reviews);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.state.reviews.title}
            </h3>
          </div>
          <div className="panel-body">
            <dl>
              <dt>Review Written by:</dt>
              <dd>{this.state.reviews.id}</dd>
              <dt>Description:</dt>
              <dd>{this.state.reviews.description}</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default userReviews;