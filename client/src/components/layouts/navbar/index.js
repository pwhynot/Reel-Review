import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import PropTypes from "prop-types"; 
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import "./style.css";
import { Link } from "react-router-dom";

 class navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <div >
        <Navbar id="nav" color="light" light expand="md">
          <NavbarBrand> <Link to="/" style={{ textDecoration: 'none', color: 'black'}}>REEL REVIEW</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link  to="/review" style={{ textDecoration: 'none', color: 'black'}}>Submit a Review</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link  to="/userReviews" style={{ textDecoration: 'none', color: 'black'}}>Reivews</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link  to="/Register" style={{ textDecoration: 'none', color: 'black'}}>Create Account </Link></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar style={{ textDecoration: 'none', color: 'black'}}>
                <DropdownToggle nav caret style={{ textDecoration: 'none', color: 'black'}}>
                  Members 
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/dashboard"><Link  to="/dashboard" style={{ textDecoration: 'none', color: 'black'}}>My Account</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/Login"><Link  to="/Login" style={{ textDecoration: 'none', color: 'black'}}>Login</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/"><Link  to="/" style={{ textDecoration: 'none', color: 'black'}} onClick={this.onLogoutClick} >Logout</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(navbar);
