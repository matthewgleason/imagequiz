import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import users from "../users";

function Login(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changeUsername = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (event) => {
    console.log(users);
  };
  return (
    <Container fluid="md" style={{ marginTop: "30px" }}>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            placeholder="Enter username"
            onChange={changeUsername}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            onChange={changePassword}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
