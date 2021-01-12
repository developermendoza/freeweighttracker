import React, {Component} from "react";
import { Jumbotron, Container, Form, Row, Button } from "react-bootstrap";
class Login extends Component{

  constructor(){
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    console.log(newUser)
  }
  render () {
    const { errors } = this.state
    return (
      <Container style={{display:"flex", justifyContent:"center", marginTop:"100px"}}>
      <Jumbotron>
      <Form onSubmit={this.onSubmit}>
      <Form.Group controlId="name" style={{minWidth:"300px"}}>
          <Form.Label>Name</Form.Label>
          <Form.Control 
            onChange={this.onChange}
            value={this.state.name}
            error={errors.name}
            type="text" 
            placeholder="Enter your name" 
            />
          <Form.Text className="text-muted">
            Required
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            type="email" 
            placeholder="Enter email" 

            />
          <Form.Text className="text-muted">
            Required
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            type="password" 
            placeholder="Password" 
            autoComplete="new password"
            />
          <Form.Text className="text-muted">
            Required
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="password2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control 
            onChange={this.onChange}
            value={this.state.password2}
            error={errors.password2}
            type="password" 
            placeholder="Retype Password" 
            autoComplete="new password"
            />
          <Form.Text className="text-muted">
            Required
          </Form.Text>
        </Form.Group>
        <p>Already a member? <a href="/login">Login here</a></p>
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