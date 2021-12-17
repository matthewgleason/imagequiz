import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navi(props) {
  let handleLogout = () => {
    props.handleLogout();
  };
  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ marginBottom: "30px", width: "100%" }}
    >
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          {!props.username && (
            <>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
              <Nav.Link href="http://localhost:4002/login/twitter">
                Sign In with Twitter
              </Nav.Link>
            </>
          )}
          {props.username && (
            <>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              <Nav.Link>Hello, {props.username}</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navi;
