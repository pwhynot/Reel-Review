import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class submitReview extends Component {

  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      description: '',
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { id, title, description } = this.state;
    axios.post('/api/reviews', { id, title, description, })
      .then((result) => {
        this.props.history.push("/userReviews")
      });
  }

  render() {
    const { id, title, description, } = this.state;
    return (
      <div>
        <div style={{ height: "25vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s8 left-align">
              <h4>
               <b>Write your review below!</b>
                <p className="flow-text black-text">
                    Fill out the form below to submit your reivew of any film or television show.
                </p>
              </h4>
              <div className="row">
                <Link to="/userReviews" className="btn-flat">
                   Check out other user's reviews 
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label for="id">Email</label>
                    <input type="email" className="form-control" name="id" value={id} onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <label for="title">Title of Film or TV Show</label>
                    <input type="text" className="form-control" name="title" value={title} onChange={this.onChange}  />
                  </div>
                  <div className="input-field col s12">
                    <label for="textarea1">Type Review Here!</label>
                    <input type="text" className="input-field col s12" name="description" value={description} onChange={this.onChange}></input>
                  </div>
                  <button type="submit" className="btn btn-small" style={{margin: "1rem", width: "100px"}}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default submitReview;