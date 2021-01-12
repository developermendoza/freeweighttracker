import React from "react";
import { Jumbotron, Container, Form, Row, Button } from "react-bootstrap";
const Login = () => {
  return (
<Container style={{display:"flex", justifyContent:"center", marginTop:"100px"}}>
<Jumbotron>
<Form.Group controlId="formBasicName" style={{minWidth:"300px"}}>
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" />
    <Form.Text className="text-muted">
      Required
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      Required
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    <Form.Text className="text-muted">
      Required
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPassword2">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Retype Password" />
    <Form.Text className="text-muted">
      Required
    </Form.Text>
  </Form.Group>
  <p>Already a member? <a href="/login">Login here</a></p>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Jumbotron>
</Container>
  )
}

export default Login;