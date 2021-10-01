import React, { useState, setState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import users from "../users";
import user from "../user";
import Navi from "../components/Navi";

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
    for (var i = 0; i < users.length; i++) {
      if (users[i].user === username && users[i].password === password) {
        history.push("/");
        user[0].currUser = username;
        setPassword("");
        user[0].currUser = username;
        setUser("");
        console.log("succesful login");
        return;
      }
    }
    setUser("");
    setPassword("");

    return alert("This is not a user!");
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
