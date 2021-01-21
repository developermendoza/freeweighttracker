import React, { Component } from 'react';
import  Hero  from "./Hero";
import { connect } from "react-redux";
import  LandingServices  from "../services/LandingServices";
import Footer from "./Footer";

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
      <LandingServices />
      <Footer />
      </>
    )
  }
  
}
const  mapStateToProps = state => ({
  auth: state.auth
}); 

export default connect(mapStateToProps)(Landing);