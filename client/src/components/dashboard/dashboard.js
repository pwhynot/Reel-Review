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

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const { user } = this.props.auth;

    return (
      <div>

        <div style={{ height: "50vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 center-align">
              <h4>
                <b>Welcome,{user.name.split(" ")[0]} </b> 
                <p className="flow-text black-text">
                  This is your profile
                </p>
              </h4>
              <p>

              </p>
              <button style={{width: "150px", borderRadius: "3px", letterSpacing: "1.5px"}} 
                onClick={this.onLogoutClick}
                className="btn btn-large btn-flat waves-effect white black-text">
                Logout
              </button>
            </div>
          </div>
        </div>

        
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
