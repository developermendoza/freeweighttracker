import React, { Component } from "react";
import AllWeights from "./DeleteWeights";
import DeleteAllWeights from "./DeleteWeightsButton";
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { getWeights, deleteWeight } from  "../../../actions/weightActions";
import { connect } from "react-redux";
import moment from "moment";

class WeightList extends Component {

  state = {
    weights : []
  }

  handleWeightDelete = (id, e) => {
    this.props.deleteWeight(id)
    // console.log("handleWeightDelete clicked", id);
  }

  componentDidMount(){
    this.props.getWeights(this.props.auth.user.id)
  }

  componentDidUpdate(prevProps){
    if(prevProps.user_measures.weightList !== this.props.user_measures.weightList){

      const sortedByDate = this.props.user_measures.weightList.sort( (a, b) => new Date(a.measure_date) - new Date(b.measure_date));
      console.log("unsorted: ", this.props.user_measures.weightList)
      console.log("sortedByDate: ", sortedByDate)

      this.setState({
        weights: sortedByDate
      })
    }
  }
  render(){
    console.log("this.state.weights: ", this.state.weights)
    return (
      <Container>
        <Row>
          <Col>
            <ListGroup>
            {this.state.weights.length > 0 && this.state.weights.map( (user, i) => 
            <ListGroupItem key={i}><div style={{display:"flex", justifyContent:"space-between"}}><span>{user.weight} lbs</span><Button onClick={this.handleWeightDelete.bind(this, user._id)} variant="danger"><i className="far fa-trash-alt"></i></Button></div>
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
export default connect(mapStateToProps,{ getWeights, deleteWeight })(WeightList);