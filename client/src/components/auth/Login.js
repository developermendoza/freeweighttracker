import React, { Component } from "react";
import { Jumbotron, Container, Form, Row, Button } from "react-bootstrap";
class Login extends Component {

  constructor(){
    super()
    this.state = {
      email: "",
      password: "",
      errors: {}
    }
  }

  onChange = e => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(userData)
  }

  render(){
    const { errors } = this.state
    return (
      <Container style={{display:"flex", justifyContent:"center", marginTop:"100px"}}>
      <Jumbotron>
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="email" style={{minWidth:"300px"}}>
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            autoComplete="email"
            />
          <Form.Text className="text-muted">
            Required
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            autoComplete="current-password"
            />
        </Form.Group>
        <p>Not a member? <a href="/register">Click here</a></p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
        </Jumbotron>
      </Container>
        )
  }

  
}

export default Login;