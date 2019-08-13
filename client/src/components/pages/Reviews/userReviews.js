import React, { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

class userReviews extends Component {

  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    axios.get("/api/reviews")
      .then(res => {
        this.setState({ reviews: res.data });
        console.log(this.state.reviews);
      });
  }

  render() {

    return (
      <div>
        <div style={{ height: "25vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s8 left-align">
              <h4>
               <b>User's Reivews</b> 
                <p className="flow-text black-text">
                    Checkout reivews from other user's 
                </p>
              </h4>

            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div class="cards white darken-1">
              <div class="card-content grey-text">
                <table className="table table-stripe">
                  <tbody>
                    {this.state.reviews.map(reviews =>
                      <tr>
                        <td>{reviews.id}</td>
                        <td>{reviews.title}</td>
                        <td>{reviews.description}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default userReviews;