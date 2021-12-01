import React from "react";
import ImgLayout from "../components/ImgLayout";
import Navi from "../components/Navi";

import { Container } from "react-bootstrap";

function Homepage(props) {
  let handleLogout = () => {
    props.handleLogout();
  };
  return (
    <Container fluid="l">
      <Navi username={props.username} handleLogout={handleLogout} />
      <ImgLayout />
    </Container>
  );
}

export default Homepage;
