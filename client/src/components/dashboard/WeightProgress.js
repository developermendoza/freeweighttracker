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
      datasets: []
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
          datasets:[
            {
                data: weights,
                label: "weight",
                backgroundColor: 'transparent',
                borderColor: 'lightblue',
                borderWidth: 6,
                color: "white"
            }],
        },
        
      })
    }
  }

  componentDidMount(){
    this.props.getWeights(this.props.auth.user.id)
  }
  render(){

    const styles = {
      fontFamily: 'sans-serif',
      textAlign: 'center',
      color: "white"
    };
    return (
      <div style={styles}>
      <h2>Weight Progress</h2>
        <Line
          data={this.state.data}
          options={{
            title:{
              display:true,
              text:'Weight (lbs)',
              fontSize:20,
              position:'left',
              fontColor: "white"
            },
            legend:{
              display:false,
              position:'right'
            },
            scales: {
            xAxes: [{ 
                gridLines: {
                    display: false,
                },
                ticks: {
                  fontColor: "#CCC", // this here
                },
            }],
            yAxes: [{
                display: true,
                borderColor: "#CCC",
                gridLines: {
                    display: true,
                    borderColor: "#CCC",
                    color: "white"
                },
                ticks: {
                  fontColor: "#CCC", // this here
                  borderColor: "#CCC"
                },
            }],
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