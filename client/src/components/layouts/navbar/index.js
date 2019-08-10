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
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand> <Link to="/" style={{ textDecoration: 'none' }}>REEL REVIEW</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link  to="/review" style={{ textDecoration: 'none'}}>Submit a Review</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link  to="/userReviews" style={{ textDecoration: 'none'}}>View User Reivews</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link  to="/weeklyTrivia" style={{ textDecoration: 'none'}}>Movie Trivia</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link  to="/Register" style={{ textDecoration: 'none'}}>Create Account</Link></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  User
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/dashboard"><Link  to="/dashboard" style={{ textDecoration: 'none'}}>My Account</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/signIn"><Link  to="/signIn" style={{ textDecoration: 'none'}}>Login</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
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


export default navbar;