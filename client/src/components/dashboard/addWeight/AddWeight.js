import AddWeightInput from "./AddWeightInput"
import AddWeightDatePicker from "./AddWeightDatePicker"
import { Container, Row, Col } from "react-bootstrap";
import React,{ Component } from "react";

class AddWeight extends Component{

  state = {
    date: new Date()
  }

  handleDatePickerChange = (date) => {
    this.setState({
      date
    })
  }

 render(){
  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <AddWeightInput date={this.state.date}/>
        </Col>
        <Col sm={12} md={6}>
          <AddWeightDatePicker handleDatePickerChange={this.handleDatePickerChange} date={this.state.date} />
        </Col>
      </Row>
    </Container>
  )
 }

}

export default AddWeight;