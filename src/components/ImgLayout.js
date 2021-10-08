import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import flowers from "../data";
import { useHistory } from "react-router-dom";

function ImgLayout(props) {
  const history = useHistory();
  const handleClick = (name) => {
    history.push({ pathname: "/quiz", state: { quizName: name } });
  };
  return (
    <Container stlye={{ alignItems: "center" }}>
      <Row>
        {flowers.map((item) => {
          return (
            <Col
              md="auto"
              key={item.name}
              onClick={() => handleClick(item.name)}
            >
              <Image src={item.picture} rounded />
              <p style={{ fontSize: "2.5vw" }}>{item.name}</p>
            </Col>
          );
        })}
        ;
      </Row>
    </Container>
  );
}

export default ImgLayout;
