import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import UserInfo from "./UserInfo";
import AddWeight from "./addWeight/AddWeight";
import WeightList from "./deleteWeights/WeightList";
import WeightProgress from "./WeightProgress";


import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addWeight } from "../../actions/weightActions";
import classnames from "classnames";



const Dashboard = () => {
  
  return (
    <Container style={{marginTop:"64px", marginBottom: "20px"}}>
      <Row style={{justifyContent: "center"}}>
        <Col sm={12} md={6} className="dashboard_section"><UserInfo /></Col>
        <Col sm={12} md={6} className="dashboard_section"><AddWeight/></Col>
      </Row>
      <Row style={{justifyContent: "center"}}>
        <Col sm={12} md={6} className="dashboard_section"><WeightList /></Col>
        <Col sm={12} md={6} className="dashboard_section weight-progress"><WeightProgress /></Col>
      </Row>
    </Container>
  )
}

export default Dashboard;