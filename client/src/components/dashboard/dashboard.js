import React, { Component } from "react";
//import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


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
              <p>
              </p>
              <button style={{width: "150px", borderRadius: "3px", letterSpacing: "1.5px"}} 
                onClick={this.onLogoutClick}
                className="btn btn-large btn-flat">
                Logout
              </button>
            </div>
          </div>
        </div>
        <ul class="collection with-header" style={{width: "300px", marginLeft: "30px"}}>
        <li class="collection-header"><h4>Your Reivews</h4></li>
        <li class="collection-item">Review 1</li>
        <li class="collection-item">Review 2</li>
        <li class="collection-item">Review 3</li>
        <li class="collection-item">Review 4</li>
      </ul>
        
    </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);