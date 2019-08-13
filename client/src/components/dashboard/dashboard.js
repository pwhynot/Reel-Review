import React, { Component } from "react";



class Dashboard extends Component {
  c


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
        <li class="collection-header"><h4>Your Reivews</h4></li>
        <li class="collection-item">Review 1 </li>
        <li class="collection-item">Review 2</li>
        <li class="collection-item">Review 3</li>
        <li class="collection-item">Review 4</li>
      </ul>
        
    </div>
    );
  }
}

export default Dashboard;
