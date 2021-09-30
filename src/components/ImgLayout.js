import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import flowers from "../data";

function ImgLayout(props) {
  return (
    <Container stlye={{ alignItems: "center" }}>
      <Row>
        {flowers.map((item) => {
          return (
            <Col md="auto">
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
