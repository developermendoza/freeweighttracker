import React, { Component } from "react";
import { Jumbotron, Container, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
class Login extends Component {

  constructor(){
    super()
    this.state = {
      email: "",
      password: "",
      errors: {}
    }
  }

  componentDidMount(){
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
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
      <>
      <div className="form-container">
      <Container style={{display:"flex", justifyContent:"center"}}>
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
        <p>Not a member? <Link to="/register">Click here</Link></p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
        </Jumbotron>
      </Container>
      </div>
        <Footer />
        </>
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