import React, { Component } from 'react';
import axios from 'axios';


class userReviews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      record: {}
    };
  }

  componentDidMount() {
    axios.get('/api/review/'+this.props.match.params.id)
      .then(res => {
        this.setState({ record: res.data });
        console.log(this.state.record);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.state.record.title}
            </h3>
          </div>
          <div className="panel-body">
            <dl>
              <dt>Review Written by:</dt>
              <dd>{this.state.record.id}</dd>
              <dt>Description:</dt>
              <dd>{this.state.record.description}</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default userReviews;