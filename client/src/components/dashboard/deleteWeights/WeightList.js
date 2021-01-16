import React, { Component } from "react";
import AllWeights from "./DeleteWeights";
import DeleteWeightsButton from "./DeleteWeightsButton";
import { Container, Row, Col, ListGroup, ListGroupItem, Button, Spinner, Modal } from "react-bootstrap";
import { getWeights, deleteWeight, loadingData, deleteAllWeights } from  "../../../actions/weightActions";
import { connect } from "react-redux";
import moment from "moment";

class WeightList extends Component {

  state = {
    weights : [],
    loading: false,
    show: false,
    submitNum: 0
  }

  handleWeightDelete = (id, e) => {
    this.props.deleteWeight(id)
  }

  componentDidMount(){
    this.props.loadingData()
    this.props.getWeights(this.props.auth.user.id)
  }

  handleClose = (data) => {
   if(data === "yes"){
    this.props.deleteAllWeights(this.props.auth.user.id)
   }
    this.setState({
      show: false
    })
  }

  handleShow = () => {
    this.setState({
      show: true
    })
  }

  componentDidUpdate(prevProps, prevState){

    if(prevProps.user_measures.weightList !== this.props.user_measures.weightList){
      
      this.setState({
        weights: this.props.user_measures.weightList,
      })
    }

    if(prevProps.errors !== this.props.errors){
      this.setState({
        weights: prevState.weights,
      })
    }
    if(prevProps.loading !== this.props.loading){
      this.setState({
        loading: this.props.loading
      })
    }
  }
  render(){
    return (
      <Container>
        <Row>
        
          <Col sm={12} md={8}>
            <h2 style={{color:"white"}}>ALL WEIGHTS</h2>
            <ListGroup style={{height: "290px", overflowY:"auto"}} className="allweights-scrollbar">
            
            {this.state.loading ? <div style={{textAlign:"center", color:"white", position:"absolute", top:"50%", left:"0", right:"0"}}><Spinner animation="border" /> </div> : this.state.weights && this.state.weights.length > 0 ? this.state.weights.sort( (a, b) => new Date(b.measure_date) - new Date(a.measure_date)).map( (user, i) => 
            <ListGroupItem style={{paddingTop:"5px", paddingBottom:"5px"}} key={i}><div style={{display:"flex", justifyContent:"space-between"}}><span style={{fontSize:"25px"}}><b>{user.weight} lbs</b></span><Button onClick={this.handleWeightDelete.bind(this, user._id)} variant="danger"><i className="far fa-trash-alt"></i></Button></div>
            <span style={{fontSize:"12px", marginBottom:"0", color:"#39424d"}}>{moment(user.measure_date).format('MMMM Do YYYY')}</span></ListGroupItem> ): <div style={{textAlign:"center", color:"white", position:"absolute", top:"50%", left:"0", right:"0"}}>You Have No Weights Added</div>  }
           
            
            </ListGroup>
          </Col>
          <Col sm={12} md={4}><DeleteWeightsButton handleShow={this.handleShow} /></Col>
        </Row>
        <Modal show={this.state.show} onHide={this.handleClose.bind(this, "no")}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Weights</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete all weights?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose.bind(this, "no")}>
            No
          </Button>
          <Button variant="primary" onClick={this.handleClose.bind(this, "yes")}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  user_measures : state.user_measures,
  auth: state.auth,
  errors: state.errors,
  weight: state.weight,
  loading: state.loading
})
export default connect(mapStateToProps,{ getWeights, deleteWeight, loadingData, deleteAllWeights })(WeightList);