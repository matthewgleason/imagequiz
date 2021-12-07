import React, { useState, useEffect } from "react";
import quizzes from "../quiz/data";
import { useLocation, useHistory } from "react-router-dom";
import { Container, Col, Row, Image, Button, Form } from "react-bootstrap";
import api from "./../communication/api";

function Quiz(props) {
  const location = useLocation();
  const history = useHistory();
  let answers = [];
  var count = 0;
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    if (quiz.length === 0) {
      api.getQuiz(localStorage.getItem("quiz_id")).then((x) => setQuiz(x));
    }
  });

  const submitForm = (e) => {
    e.preventDefault();
    count = answers.filter((x) => x === true).length;
    history.push({
      pathname: "/score",
      state: { score: count, quizName: location.state.quizName },
    });
  };

  const choiceChanged = (e) => {
    let index = e.target.name;
    console.log(e.target.name);
    if (quiz[index].answer === e.target.value) {
      answers[index] = true;
    } else {
      answers[index] = false;
    }
  };

  return (
    <>
      <Container stlye={{ alignItems: "center" }}>
        <h1 style={{ marginLeft: "28px" }}>Quiz {location.state.quizName}</h1>
        <Form>
          <Row fluid="xl">
            {quiz.map((item) => {
              const index = quiz.indexOf(item);
              var nums = [];
              while (nums.length < 3) {
                var r = Math.floor(Math.random() * 3);
                if (nums.indexOf(r) === -1) nums.push(r);
              }
              let choices = item.choices.split(",");
              return (
                <Col style={{ margin: "30px" }} xs="auto" key={item.answer}>
                  <h3>Question {index + 1}</h3>
                  <Row>
                    <Image src={item.picture} rounded />
                  </Row>
                  <Row>
                    <Form.Check
                      name={`${index}`}
                      type="radio"
                      onChange={choiceChanged}
                      label={choices[nums[0]]}
                      value={choices[nums[0]]}
                      style={{ marginLeft: "10px" }}
                    />

                    <Form.Check
                      name={`${index}`}
                      type="radio"
                      onChange={choiceChanged}
                      label={choices[nums[1]]}
                      value={choices[nums[1]]}
                      style={{ marginLeft: "10px" }}
                    />

                    <Form.Check
                      name={`${index}`}
                      type="radio"
                      label={choices[nums[2]]}
                      onChange={choiceChanged}
                      value={choices[nums[2]]}
                      style={{ marginLeft: "10px" }}
                    />
                  </Row>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Button
              style={{ marginBottom: "30px" }}
              type="button"
              onClick={submitForm}
            >
              Submit
            </Button>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default Quiz;
