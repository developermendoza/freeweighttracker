import React , { Component } from "react";
import {Line} from 'react-chartjs-2';
import { connect } from "react-redux";
import { getWeights } from  "../../actions/weightActions";
import moment from "moment";

class WeightProgress extends Component {

  state = {
    // data: {},
    data: {
      labels: [],
      datasets: [
      {
        label: "none",
        backgroundColor: 'transparent',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: []
      }
    ]
    },
  }

  componentDidUpdate(prevProps){

    if(prevProps.user_measures.weightList !== this.props.user_measures.weightList){

      const sortedByDate = this.props.user_measures.weightList.sort( (a, b) => new Date(a.measure_date) - new Date(b.measure_date));
      const labels = sortedByDate.map(weight => moment(weight.measure_date).format("MMMM DD"));
      const weights = sortedByDate.map( weight => weight.weight);

      this.setState({
        data : {
          labels,
          datasets:[{data:weights}],
        }
      })
    }
  }

  componentDidMount(){
    this.props.getWeights(this.props.auth.user.id)
  }
  render(){
    console.log("this.props: ", this.props)
    return (
      <div>
        <Line
          data={this.state.data}
          options={{
            title:{
              display:true,
              text:'Weight Progress',
              fontSize:20,
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
      </div>
    )
  }
  
}

const mapStateToProps = state => ({
  user_measures: state.user_measures,
  auth: state.auth
})

export default connect(mapStateToProps, { getWeights })(WeightProgress);