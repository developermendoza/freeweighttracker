import React, { Component } from "react";
import { Jumbotron, Container, Form, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
class Login extends Component {

  constructor(){
    super()
    this.state = {
      email: "",
      password: "",
      errors: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard")
    }

    if(nextProps.errors){
      this.setState({
        errors: nextProps.errors
      })
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
    this.props.loginUser(userData)
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
            className={classnames("", {invalid:errors.email || errors.emailnotfound})}
            autoComplete="email"
            />
          {errors.email  || errors.emailnotfound  ? <Form.Text style={{color:"red"}}>{errors.email}{errors.emailnotfound}</Form.Text> : <Form.Text className="text-muted">Required
          </Form.Text> }
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
            className={classnames("", {invalid:errors.password || errors.passwordincorrect})}
            />
            {errors.password || errors.passwordincorrect ? <Form.Text style={{color:"red"}}>{errors.password}{errors.passwordincorrect}</Form.Text> : <Form.Text className="text-muted">Required
          </Form.Text> }
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const  mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);