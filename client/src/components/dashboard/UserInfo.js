import React, { Component} from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Row, Col } from "react-bootstrap";

class UserInfo extends Component{

  state = {
    weights : [],
    submitNum: 0,
    weightProgress: "",
    weightProgressTotal: "",
    memberDate: "",
    gainWeight: false,
    lostWeight: false
  }

  componentDidMount(){
    this.setState({
      memberDate: this.props.auth.user.date
    })
  }

  getTodaySubmitTimes = (weights) => {
   let date = new Date();
    date = moment(date).format("MMDDYYYY");

    const todaysWeight = weights.filter( weight => date === moment(weight.measure_date).format("MMDDYYYY"));

    this.setState({
      submitNum:todaysWeight.length
    })
  }

  getCurrentWeightProgress = (sortedWeights) => {
  // gets the current date user object
  const currentSubmitWeight = sortedWeights[0];
  // gets the second to current date  user object
  const secondSubmitWeight = sortedWeights[1];
  
    // compares the two weights of the two values and then we set that to weightProgress state
  if(currentSubmitWeight.weight < secondSubmitWeight.weight){
    this.setState({
      weightProgress: `You have lost ${secondSubmitWeight.weight - currentSubmitWeight.weight} lbs since ${moment(secondSubmitWeight.measure_date).format("MMMM DD YYYY")}`
    })
  }else if(currentSubmitWeight.weight > secondSubmitWeight.weight){

    this.setState({
      weightProgress: `You have gained ${currentSubmitWeight.weight - secondSubmitWeight.weight} lbs since ${moment(secondSubmitWeight.measure_date).format("MMMM DD YYYY")}`
    })

  }else if(currentSubmitWeight.weight === secondSubmitWeight.weight){
    this.setState({
      weightProgress: `Your weight has remain the same ${currentSubmitWeight.weight} lbs since ${moment(secondSubmitWeight.measure_date).format("MMMM DD YYYY")}`
    })
  }else{
    this.setState({
      weightProgress: ""
    })
  }

  


  }

  getTotalWeightProgress = (sortedWeights) => {


    if(sortedWeights[0].weight < sortedWeights[sortedWeights.length - 1].weight){
      this.setState({
        weightProgressTotal: sortedWeights[sortedWeights.length - 1].weight - sortedWeights[0].weight,
        lostWeight: true
      })
    }else if(sortedWeights[0].weight > sortedWeights[sortedWeights.length - 1].weight){
      this.setState({
        weightProgressTotal: sortedWeights[0].weight - sortedWeights[sortedWeights.length - 1].weight,
        gainWeight: true
      });
  
    }else if(sortedWeights[0].weight === sortedWeights[sortedWeights.length - 1].weight){
      this.setState({
        weightProgressTotal: sortedWeights[0].weight 
      })
    }else{
      this.setState({
        weightProgressTotal: ""
      })
    }
  }


  userAnalytics = (weights) => {
    // gets called to get weights that were submitted today
    this.getTodaySubmitTimes(weights);
    // checks to see if there are more than one weight to compare to so we can call the getCurrentWeightProgress and the getTotalWeightProgress functions, if there isn't then lets clear the state of the weightProgree and weightProgressTotal
    if(weights.length > 1){
      const sortedWeights = weights.sort(function compare(a, b) {
        var dateA = new Date(a.measure_date);
        var dateB = new Date(b.measure_date);
        return dateB - dateA;
      });

      this.getCurrentWeightProgress(sortedWeights);
      this.getTotalWeightProgress(sortedWeights);
    }else{
      this.setState({
        weightProgress: "",
        weightProgressTotal: ""
      });
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.user_measures.weightList !== this.props.user_measures.weightList){
      this.setState({
        weights: this.props.user_measures.weightList
      }, this.userAnalytics(this.props.user_measures.weightList))
    }
  }
  render(){
    return (
      <div>
        <h2 style={{fontSize:"2.5rem"}}>Welcome <b style={{textTransform:"capitalize"}}>{ this.props.auth.user.name.split(" ")[0] }!</b></h2>
        <Row className="user-info-section-row">
          <Col xs="12" md="7">
            <div>
              <h4 style={{color: "grey"}}>Email</h4>
              <h4 style={{fontSize:"1.0rem"}}>{this.props.auth.user.email}</h4>
            </div>
          </Col>
          <Col xs="12" md="4" className="user-info-section member" style={{background:"#293643"}}>
              <p>MEMBER SINCE</p>
              <Row>
                <Col xs="6" md="12">
                  {moment(this.state.memberDate).format("MMMM").toUpperCase()}
                </Col>
                <Col xs="6" md="12">
                  {moment(this.state.memberDate).format("DD/YYYY")}
                </Col>
              </Row>
          </Col>
        </Row>
        {this.state.weightProgressTotal !== "" ? <Row className="user-info-section-row">
          <Col xs="12" md="4" className="user-info-section weight-progress">
              {this.state.gainWeight && <p>WEIGHT GAINT TOTAL</p>}
              {this.state.lostWeight && <p>WEIGHT LOSS TOTAL</p>}
                <p className="weight-progress-weight">{this.state.weightProgressTotal}<span> LBS</span></p>
                <p>Since {moment(this.state.memberDate).format("MMMM DD YYYY")}</p>
          </Col>
          <Col xs="12" md="4" className="user-info-section">
            <div>
              <p>TODAYS SUBMISSION</p>
              <div>
                <p className="weight-submission">{this.state.submitNum}</p>
              </div>
            </div>
          </Col>
        </Row>
        :""}
      </div>
    )
  }
  
}

const mapStateToProps = state => ({
  auth: state.auth,
  user_measures : state.user_measures,
})

export default connect(mapStateToProps)(UserInfo);