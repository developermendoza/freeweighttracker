import React from "react";
import { Jumbotron, Container, Form, Row, Button } from "react-bootstrap";
const Login = () => {
  return (
<Container style={{display:"flex", justifyContent:"center", marginTop:"100px"}}>
<Jumbotron>
  <Form.Group controlId="formBasicEmail" style={{minWidth:"300px"}}>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      Required
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <p>Not a member? <a href="/register">Click here</a></p>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Jumbotron>
</Container>
  )
}

export default Login;