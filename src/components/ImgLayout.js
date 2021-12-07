import React, { useEffect, useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "./../communication/api";

function ImgLayout(props) {
  const history = useHistory();
  const handleClick = (name, id) => {
    props.quiz_id(id);
    history.push({ pathname: "/quiz/:id", state: { quizName: name } });
  };
  const [flowers, setFlowers] = useState([]);
  useEffect(() => {
    if (flowers.length === 0) {
      api.getFlowers().then((x) => setFlowers(x));
    }
  });
  return (
    <Container stlye={{ alignItems: "center" }}>
      <Row>
        {flowers.map((item) => (
          <Col
            md="auto"
            key={item.name}
            onClick={() => handleClick(item.name, item.id)}
          >
            <Image src={item.picture} rounded />
            <p style={{ fontSize: "2.5vw" }}>{item.name}</p>
          </Col>
        ))}
        ;
      </Row>
    </Container>
  );
}

export default ImgLayout;
