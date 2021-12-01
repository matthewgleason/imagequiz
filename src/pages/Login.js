import React, { useState, setState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import users from "../users";
import user from "../user";
import Navi from "../components/Navi";
import api from "../communication/api";

function Login(props) {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changeUsername = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    api.signin(username, password).then((x) => {
      if (x.done) {
        console.log(x);
        props.loggedin(username);
        history.push("/");
      } else {
        alert("User was not found.");
      }
    });
  };
  return (
    <>
      <Navi />
      <Container fluid="md" style={{ marginTop: "30px" }}>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              placeholder="Enter username"
              onChange={changeUsername}
              value={username}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              onChange={changePassword}
              value={password}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Login;
