import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";

function Score(props) {
  const location = useLocation();
  const history = useHistory();
  const count = location.state.score;
  const quiz = location.state.quizName;
  console.log(count, quiz);
  const playAgain = (e) => {
    console.log(quiz);
    history.push({ pathname: "/quiz", state: { quizName: quiz } });
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