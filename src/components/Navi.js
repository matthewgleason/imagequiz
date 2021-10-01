import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import user from "../user";

function Navi(props) {
  const [username, setName] = useState(user[0].currUser);
  const handleLogout = () => {
    user.push({ currUser: "" });
    user.splice(0, 1);
    setName("");
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
          {username === "" && (
            <>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            </>
          )}
          {username !== "" && (
            <>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              <Nav.Link>Hello, {username}</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navi;
