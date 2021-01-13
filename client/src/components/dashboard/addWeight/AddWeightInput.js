import React, {Component} from "react";
import { Form, Col, Button, Spinner, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { addWeight, loadingData } from "../../../actions/weightActions";



class AddWeightInput extends Component{

  constructor(){
    super()
    this.state = {
      weight: "",
      userId: "",
      errors: {},
      loading: false,
      submitted: false
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.errors !== this.props.errors){
      this.setState({
        errors: this.props.errors,
        loading: this.props.loading,
      })
    }

    if(prevProps.loading !== this.props.loading){
      this.setState({
        loading: this.props.loading
      })
    }

    if(prevProps.weight !== this.props.weight){
      this.setState({
        submitted: !!this.props.weight.weight
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
        date: this.props.date
      }
      this.props.loadingData()
    this.props.addWeight(newWeight);
  }
  render() {
    // this will close the success alert automatically 
    if(this.state.submitted){
      setTimeout(
        () => this.setState({submitted:false}), 
        3000
      );
    }
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
      <Button type="submit" disabled={this.state.loading}> {this.state.loading ?<> <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    /> Loading...</>
     : "ADD WEIGHT"}</Button>
    </Form.Row>
    {this.state.submitted && 
      <Form.Row>
      <Alert variant="success" onClose={ () => this.setState({submitted: false}) }  dismissible>
        <p>
          Weight Submitted
        </p>
      </Alert>
    </Form.Row> 
    }

  </Form>
    )
  }

}

const mapStateToProps = state => ({
  weight: state.weight,
  auth: state.auth,
  errors: state.errors,
  loading: state.loading
})

export default connect(mapStateToProps,
  { addWeight, loadingData })(AddWeightInput);