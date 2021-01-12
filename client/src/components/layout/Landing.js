import React, { useState } from 'react';
import  Hero  from "./Hero";
import { Modal, Button } from 'react-bootstrap';

function Landing(){
  return (
    <>
    <Hero image="/images/hero.jpg" text="Free Weight Tracker" />
    </>
  )
}

export default Landing;