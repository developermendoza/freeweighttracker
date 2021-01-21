import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col} from "react-bootstrap";
// import PageNotFound from '../assets/images/PageNotFound';
function NotFoundPage (){
        return <Jumbotron className="not-found-page" style={{padding:"150px 0", background:"#414F5E"}}>
            <Row>
              <Col xs="12"><h1>404</h1></Col>
              <Col xs="12"><h2>PAGE NOT FOUND</h2></Col>
              <Col xs="12" style={{textAlign:"center"}}><Link to="/">Go back Home </Link></Col>
            </Row>
          </Jumbotron>
}
export default NotFoundPage;