import React, { Component } from 'react';
import axios from 'axios';


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
        <div style={{ height: "25vh", width: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s8">
              <h2>
                <p className="flow-text grey-text text-darken-4">
                Fill out the form below and submit your reivew of any film or television show.
                </p>
              </h2>
              
            </div>
          </div>
        </div>
        <div className="container black-text">
          <div className="row">
            <div className="col s12">
              <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label for="id">Name</label>
                    <input type="name" className="form-control" name="id" value={id} onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <label for="title">Title of Film or TV Show</label>
                    <input type="name" className="form-control" name="title" value={title} onChange={this.onChange}  />
                  </div>
                  <div className="input-field col s12">
                    <label for="textarea1">Type Review Here!</label>
                    <textarea id="textarea1" class="materialize-textarea" name="description" value={description} onChange={this.onChange}></textarea>
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