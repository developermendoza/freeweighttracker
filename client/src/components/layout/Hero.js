import React from "react";
import { Jumbotron } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Hero = ({image, text}) => {
  return (
    <Jumbotron style={{backgroundImage: `url(${image})`, height:"800px",  backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize:"cover" , marginBottom:"0"}}>
     <h1 style={{fontSize:"10rem", color:"white"}}>{text}</h1>
     <h2 style={{color:"darkgrey"}}><Link to="/register" className="hero-link">Sign up</Link> to get started now!</h2>
    </Jumbotron>
  )
}

export default Hero;