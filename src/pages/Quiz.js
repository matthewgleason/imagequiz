import React from "react";
import quizzes from "../quiz/data";
import { useLocation, useHistory } from "react-router-dom";
import { Container, Col, Row, Image, Button, Form } from "react-bootstrap";

function Quiz(props) {
  const location = useLocation();
  const history = useHistory();
  var count = 0;

  let quiz = quizzes.find((x) =>
    x.find((y) => y.answer === location.state.quizName)
  );
  const submitForm = (e) => {
    e.preventDefault();
    var i = 1;
    var tens = 1;
    while (tens * 10 + 1 !== 71) {
      if (i % 10 === 3) {
        i = tens * 10 + 1;
        tens++;
      } else {
        i++;
      }
      if (i < 53 && document.getElementById(i.toString()).checked) {
        let val = document.getElementById(i.toString()).value;
        if (val === quiz[tens - 1].answer) {
          count++;
          console.log(count, " count");
        }
      }
    }
    history.push({
      pathname: "/score",
      state: { score: count, quizName: location.state.quizName },
    });
    /*
      
    */
  };
  return (
    <>
      <Container stlye={{ alignItems: "center" }}>
        <h1>Quiz {location.state.quizName}</h1>
        <Form>
          <Row fluid="xl">
            {quiz.map((item) => {
              const index = quiz.indexOf(item);
              return (
                <Col style={{ margin: "30px" }} md="auto" key={item.answer}>
                  <h3>Question {index + 1}</h3>
                  <Row>
                    <Image src={item.picture} rounded />
                  </Row>
                  <Row>
                    <Form.Check
                      name={`${index}`}
                      type="radio"
                      label={item.choices[0]}
                      id={index * 10 + 1}
                      value={item.choices[0]}
                    />

                    <Form.Check
                      name={`${index}`}
                      type="radio"
                      label={item.choices[1]}
                      id={index * 10 + 2}
                      value={item.choices[1]}
                    />

                    <Form.Check
                      name={`${index}`}
                      type="radio"
                      label={item.choices[2]}
                      id={index * 10 + 3}
                      value={item.choices[2]}
                    />
                  </Row>
                </Col>
              );
            })}
            ;
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
