import React from "react";
import AllWeights from "./DeleteWeights";
import DeleteAllWeights from "./DeleteWeightsButton";
import { Container, Row, Col } from "react-bootstrap";

const WeightList = () => {
  return (
    <Container>
      <Row>
        <Col><AllWeights /></Col>
        <Col><DeleteAllWeights /></Col>
      </Row>
    </Container>
  )
}

export default WeightList;