import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import users from "../users";
import { useHistory } from "react-router-dom";
import user from "../user";
import Navi from "../components/Navi";
import api from "../communication/api";

function Register(props) {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  //const []

  const history = useHistory();

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changeUsername = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    api.signup(username, username, password).then((x) => {
      if (x.done) {
        //console.log(x.done);
        history.push("/");
      } else {
        console.log("Customer could not be saved");
        alert("Customer could not be saved");
      }
    });
  };
  return (
    <>
      <Navi />
      <Container fluid="md" style={{ marginTop: "30px" }}>
        <h1>Register</h1>
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

export default Register;
