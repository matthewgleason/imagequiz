import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import users from "../users";

function Register(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changeUsername = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (event) => {
    users.push({ user: user, password: password });
    console.log(users);
  };
  return (
    <Container fluid="md" style={{ marginTop: "30px" }}>
      <h1>Register</h1>
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

export default Register;
