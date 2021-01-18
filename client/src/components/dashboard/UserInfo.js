import React, { Component} from "react";
import { connect } from "react-redux";
import moment from "moment";

class UserInfo extends Component{

  state = {
    weights : [],
    submitNum: 0,
    weightProgress: "",
    weightProgressTotal: ""
  }

  getTodaySubmitTimes = (weights) => {
   let date = new Date();
    date = moment(date).format("MMDDYYYY");
    let submitNum = [];
        weights.map( weight => {
     if(date === moment(weight.measure_date).format("MMDDYYYY")){
      submitNum.push(weight.measure_date);
     }
    });
    this.setState({
      submitNum:submitNum.length
    })
  }

  getCurrentWeightProgress = (sortedWeights) => {
  // gets the current date user object
  const currentSubmitWeight = sortedWeights[0];
  // gets the second to current date  user object
  const secondSubmitWeight = sortedWeights[1];

  // debugger;

  
    // compares the two weights of the two values and then we set that to weightProgress state
  if(currentSubmitWeight.weight < secondSubmitWeight.weight){
    this.setState({
      weightProgress: `You have lost ${secondSubmitWeight.weight - currentSubmitWeight.weight} lbs since ${moment(secondSubmitWeight.measure_date).format("MMMM DD YYYY")}`
    })
  }else if(currentSubmitWeight.weight > secondSubmitWeight.weight){

    this.setState({
      weightProgress: `You have gained ${currentSubmitWeight.weight - secondSubmitWeight.weight} lbs since ${moment(secondSubmitWeight.measure_date).format("MMMM DD YYYY")}`
    })

  }else if(currentSubmitWeight.weight == secondSubmitWeight.weight){
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
        weightProgressTotal: `You have lost a total of ${sortedWeights[sortedWeights.length - 1].weight - sortedWeights[0].weight} lbs since ${moment(sortedWeights[sortedWeights.length - 1].measure_date).format("MMMM DD YYYY")}`
      })
    }else if(sortedWeights[0].weight > sortedWeights[sortedWeights.length - 1].weight){
  
      this.setState({
        weightProgressTotal: `You have gained a total of ${sortedWeights[0].weight - sortedWeights[sortedWeights.length - 1].weight} lbs since ${moment(sortedWeights[sortedWeights.length - 1].measure_date).format("MMMM DD YYYY")}`
      })
  
    }else if(sortedWeights[0].weight == sortedWeights[sortedWeights.length - 1].weight){
      this.setState({
        weightProgressTotal: `Your weight has remain the same ${sortedWeights[0].weight} lbs since ${moment(sortedWeights[sortedWeights.length - 1].measure_date).format("MMMM DD YYYY")}`
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
        <h4 style={{color: "grey"}}>Email</h4>
        <h4 style={{fontSize:"1.0rem"}}>{this.props.auth.user.email}</h4>
        <p>You have submitted {this.state.submitNum} {this.state.submitNum > 1 ? "times": "time"} today</p>
        <p>{this.state.weightProgress}</p>
        <p>{this.state.weightProgressTotal}</p>
      </div>
    )
  }
  
}

const mapStateToProps = state => ({
  auth: state.auth,
  user_measures : state.user_measures,
})

export default connect(mapStateToProps)(UserInfo);