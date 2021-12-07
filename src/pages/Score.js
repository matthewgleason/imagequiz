import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import api from "./../communication/api";

function Score(props) {
  const location = useLocation();
  const history = useHistory();
  const count = location.state.score;
  const quiz = location.state.quizName;
  api
    .setScore(
      count,
      localStorage.getItem("quiz_id"),
      localStorage.getItem("customer")
    )
    .then((x) => console.log(x))
    .catch((e) => console.log(e));
  console.log(count, quiz);
  const playAgain = (e) => {
    history.push({ pathname: "/quiz/:id", state: { quizName: quiz } });
  };
  const returnHome = (e) => {
    history.push("/");
  };
  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "200px",
        }}
        fluid="xl"
      >
        <h2>Your score was {count}/6</h2>
      </Container>

      <Container
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        fluid="xl"
      >
        <Row fluid="s">
          <Col xs="auto">
            <Button style={{ margin: "10px" }} onClick={playAgain}>
              Play again?
            </Button>
          </Col>

          <Col xs="auto">
            <Button style={{ margin: "10px" }} onClick={returnHome}>
              Go to Home
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Score;
