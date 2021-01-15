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
      submitted: false,
      loading: false,
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.errors !== this.props.errors){

      this.setState({
        errors: this.props.errors,
      })
    }

    if(prevProps.loading !== this.props.loading){
      this.setState({
        loading: this.props.loading
      })
    }
    if(prevProps.user_measures.newWeight !== this.props.user_measures.newWeight){
      this.setState({
        submitted: !!this.props.user_measures.newWeight,
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
        <Form.Label style={{fontsize: "1.8rem",
    color: "white",
    fontFamily: "Roboto,sans-serif"}}>ADD NEW WEIGHT</Form.Label>
        <Form.Control 
        onChange={this.handleChange}
        value={this.state.weight}
        id="weight"
        type="number" placeholder="Add Weight" />
      </Col>
    </Form.Row>
    <Form.Row style={{justifyContent:"center"}}>
    <div className="button-wrapper">
      <Button className="button" type="submit" disabled={this.state.loading}> {this.state.loading ?<> <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    /> Loading...</>
     : "ADD WEIGHT"}</Button></div>
    </Form.Row>
    {this.state.errors.msg && this.state.errors.msg && <Form.Row>
      <Alert variant="danger" onClose={ () => this.setState({errors: {}})} dismissible>
        <p>
       { this.state.errors.msg }
        </p>
      </Alert>
    </Form.Row> }
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
  user_measures: state.user_measures,
  loading: state.loading
})

export default connect(mapStateToProps,
  { addWeight, loadingData })(AddWeightInput);