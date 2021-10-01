import React from "react";
import ImgLayout from "../components/ImgLayout";
import Navi from "../components/Navi";

import { Container } from "react-bootstrap";

function Homepage(props) {
  return (
    <Container fluid="l">
      <Navi />
      <ImgLayout />
    </Container>
  );
}

export default Homepage;
