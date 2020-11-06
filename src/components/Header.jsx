import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="light-blue" expand="md">
        <Navbar.Brand>
          <Link to="/">Contact List</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Button variant="light">
            <Link to="/add-contact">Create Button</Link>
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
