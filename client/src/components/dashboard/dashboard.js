import React, { Component } from "react";
import axios from "axios";


class Dashboard extends Component {
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
    const { user } = this.props.auth;

    return (
      <div>

        <div style={{ height: "25vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 left-align">
              <h4>
                <b>Welcome,{user.name.split(" ")[0]} </b> 
                <p className="flow-text black-text">
                  This is your profile, you can access all your reviews from here.
                </p>
              </h4>
            </div>
          </div>
        </div>
        <ul class="collection with-header" style={{width: "500px", marginLeft: "30px"}}>
        {this.state.reviews.map(reviews =>
            <tbody>
            {this.state.reviews.map(reviews =>
             <tr>
             <td>{reviews.id}</td>
             <td>{reviews.title}</td>
             <td>{reviews.description}</td>
           </tr>
            )}
          </tbody>   
                    )}
        
      </ul>
        
    </div>
    );
  }
}

export default Dashboard;
