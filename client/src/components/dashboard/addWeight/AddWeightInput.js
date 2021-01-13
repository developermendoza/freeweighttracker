import React, {Component} from "react";
import { Form, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addWeight } from "../../../actions/weightActions";



class AddWeightInput extends Component{

  constructor(){
    super()
    this.state = {
      weight: "",
      userId: "",
      errors: {}
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.errors !== this.props.errors){
      this.setState({
        errors: this.props.errors
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  componentDidMount(){
    this.setState({
      userId : this.props.auth.user.id
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
      const newWeight = {
        userId: this.state.userId,
        weight: this.state.weight,
        date: new Date()
      }

    this.props.addWeight(newWeight);
  }
  render() {
    // console.log("this.props", this.props)
    return (
      <Form onSubmit={this.handleSubmit}>
    <Form.Row>
      <Col>
        <Form.Label>Add New Weight</Form.Label>
        <Form.Control 
        onChange={this.handleChange}
        value={this.state.weight}
        id="weight"
        type="number" placeholder="Add Weight" />
        <span>{this.state.errors.msg && this.state.errors.msg}</span>
      </Col>
    </Form.Row>
    <Form.Row>
      <Button type="submit">ADD WEIGHT</Button>
    </Form.Row>
  </Form>
    )
  }

}

const mapStateToProps = state => ({
  weight: state.weight,
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps,
  { addWeight })(AddWeightInput);