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
  }

  componentDidMount(){
    this.props.getWeights(this.props.auth.user.id)
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.user_measures.weightList !== this.props.user_measures.weightList){


      this.setState({
        weights: this.props.user_measures.weightList
      })
    }

    if(prevProps.errors !== this.props.errors){
      this.setState({
        weights: prevState.weights
      })
    }
  }
  render(){
    return (
      <Container>
        <Row>
        
          <Col style={{minWidth:"330px"}}>
            <h2>All Weights</h2>
            <ListGroup style={{height: "290px", overflowY:"auto"}} className="allweights-scrollbar">
            {this.state.weights && this.state.weights.length > 0 && this.state.weights.sort( (a, b) => new Date(b.measure_date) - new Date(a.measure_date)).map( (user, i) => 
            <ListGroupItem key={i}><div style={{display:"flex", justifyContent:"space-between"}}><span>{user.weight} lbs</span><Button onClick={this.handleWeightDelete.bind(this, user._id)} variant="danger"><i className="far fa-trash-alt"></i></Button></div>
            <p style={{fontSize:"12px"}}>{moment(user.measure_date).format('MMMM Do YYYY')}</p></ListGroupItem> )}
            </ListGroup></Col>
          <Col style={{margin:"auto", textAlign:"center"}}><DeleteAllWeights /></Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  user_measures : state.user_measures,
  auth: state.auth,
  errors: state.errors,
  weight: state.weight
})
export default connect(mapStateToProps,{ getWeights, deleteWeight })(WeightList);