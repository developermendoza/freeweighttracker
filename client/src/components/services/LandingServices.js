import React from "react";
import { Row, Col, Container} from "react-bootstrap";

function LandingServices( ) {
  return(
    <section className="landing-services">
    <Container>
      <Row  className="landing-services-row">
        <Col xs="12" lg="3" className="landing-services-col">
            <p>Login or Register</p>
            <div className="service-container">
              <img id="userIcon" src="/images/user.png" alt="user icon"/>
            </div>
        </Col>
        <Col xs="12" lg="3" className="landing-services-col">
        <p>Track Progress</p>
          <div className="service-container">
            <img id="chartIcon" src="/images/chart.png" alt="chart icon"/>
          </div>
        </Col>
        <Col xs="12" lg="3" className="landing-services-col">
        <p>Achieve Goals</p>
          <div className="service-container">
            <img id="thropyIcon"  src="/images/trophy.png" alt="trophy icon"/>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
  )
}
export default  LandingServices;