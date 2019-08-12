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
          <NavbarBrand> <Link to="/">REEL REVIEW</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link  to="/review">Submit a Review</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link  to="/userReviews">View User Reivews</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link  to="/weeklyTrivia">Movie Trivia</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link  to="/Register">Create Account</Link></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  User
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/dashboard"><Link  to="/dashboard">My Account</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/Login"><Link  to="/Login">Login</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/"><Link  to="/">Logout</Link>
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