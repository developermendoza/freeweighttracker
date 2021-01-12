import React, { Component } from 'react';
import  Hero  from "./Hero";
import { Modal, Button } from 'react-bootstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Landing extends Component{
  componentDidMount(){
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render(){
    return (
      <>
      <Hero image="/images/hero.jpg" text="Free Weight Tracker" />
      </>
    )
  }
  
}
const  mapStateToProps = state => ({
  auth: state.auth
}); 

export default connect(mapStateToProps)(Landing);