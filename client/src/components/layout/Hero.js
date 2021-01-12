import React from "react";
import { Jumbotron } from 'react-bootstrap'

const Hero = ({image, text}) => {
  return (
    <Jumbotron style={{backgroundImage: `url(${image})`, height:"800px",  backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize:"cover" }}>
     <h1 style={{fontSize:"10rem", color:"white"}}>{text}</h1>
     <h2 style={{color:"darkgrey"}}><a href="/register">Sign up</a> to get started now!</h2>
    </Jumbotron>
  )
}

export default Hero;