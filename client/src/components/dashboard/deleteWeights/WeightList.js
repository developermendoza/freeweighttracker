import React, { Component } from "react";
import AllWeights from "./DeleteWeights";
import DeleteAllWeights from "./DeleteWeightsButton";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { getWeights } from  "../../../actions/weightActions";
import { connect } from "react-redux";
import moment from "moment";

class WeightList extends Component {

  state = {
    weights : []
  }

  

  componentDidMount(){
    this.props.getWeights(this.props.auth.user.id)
  }

  componentDidUpdate(prevProps){
    if(prevProps.user_measures.weightList !== this.props.user_measures.weightList){
      this.setState({
        weights: this.props.user_measures.weightList
      })
    }
  }
  render(){

    return (
      <Container>
        <Row>
          <Col>
            <ListGroup>
            {this.state.weights.length > 0 && this.state.weights.map( (user, i) => 
            <ListGroupItem key={i}><p>{user.weight} lbs</p>
            <p style={{fontSize:"12px"}}>{moment(user.measure_date).format('MMMM Do YYYY')}</p></ListGroupItem> )}
            </ListGroup></Col>
          <Col><DeleteAllWeights /></Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  user_measures : state.user_measures,
  auth: state.auth,
})
export default connect(mapStateToProps,{ getWeights })(WeightList);