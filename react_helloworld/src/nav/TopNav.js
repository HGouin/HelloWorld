import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Label,
  input
} from "reactstrap";

export default class TopNav extends Component {
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
      <div
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 10,
          backgroundColor: "#00ffaa"
        }}
      >
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">Welcome!</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contacts">Contacts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/nameform">NameForm</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/calculator">Calculator</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
