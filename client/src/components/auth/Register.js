import React, {Component} from "react";
import { Jumbotron, Container, Form, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component{

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

  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({
        errors:nextProps.errors
      })
    }
  }

  componentDidMount(){
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
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
    console.log(newUser);
    this.props.registerUser(newUser, this.props.history)
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
            className={classnames("", {
              invalid: errors.name
            })}
            placeholder="Enter your name" 
            />

          {errors.name ? <Form.Text style={{color:"red"}}>{errors.name}</Form.Text> : <Form.Text className="text-muted">Required
          </Form.Text> }
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            type="email" 
            className={classnames("", {
              invalid: errors.email
            })}
            placeholder="Enter email" 

            />
          {errors.email ? <Form.Text style={{color:"red"}}>{errors.email}</Form.Text> : <Form.Text className="text-muted">Required
          </Form.Text> }
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
            className={classnames("", {
              invalid: errors.password
            })}
            />
          {errors.password ? <Form.Text style={{color:"red"}}>{errors.password}</Form.Text> : <Form.Text className="text-muted">Required
          </Form.Text> }
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
            className={classnames("", {
              invalid: errors.password2
            })}
            />
          {errors.password2 ? <Form.Text style={{color:"red"}}>{errors.password2}</Form.Text> : <Form.Text className="text-muted">Required
          </Form.Text> }
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);