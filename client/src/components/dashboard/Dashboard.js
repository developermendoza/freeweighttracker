import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import UserInfo from "./UserInfo";
import AddWeight from "./addWeight/AddWeight";
import WeightList from "./deleteWeights/WeightList";
import WeightProgress from "./WeightProgress";

const Dashboard = () => {
  return (
    <Container>
      <Row style={{marginTop:"150px", justifyContent: "space-between"}}>
        <Col><UserInfo /></Col>
        <Col><AddWeight /></Col>
      </Row>
      <Row>
        <Col><WeightList /></Col>
        <Col><WeightProgress /></Col>
      </Row>
    </Container>
  )
}

export default Dashboard;