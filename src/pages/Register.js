import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import users from "../users";
import { useHistory } from "react-router-dom";
import user from "../user";
import Navi from "../components/Navi";

function Register(props) {
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
    for (var i = 0; i < users.length; i++) {
      if (users[i].user === username && users[i].password === password) {
        setUser("");
        setPassword("");
        return alert("This user already exists!");
      }
    }
    users.push({ user: username, password: password });
    history.push("/");
    console.log(users);
    user[0].currUser = username;
    setUser("");
    setPassword("");
    return;
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
