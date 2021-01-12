import React from "react";
import {Navbar as NavigationBar, Nav } from 'react-bootstrap'


const Navbar = () => {
  return (
    <NavigationBar fixed="top" bg="dark" variant="dark" style={{display:"flex", justifyContent:"space-between"}}>
      <NavigationBar.Brand href="/">{' '}
        Free Weight Tracker
      </NavigationBar.Brand>
      <div style={{display: "flex", alignItems:"center"}}>
      <Nav.Link href="/login">Login</Nav.Link><span style={{color:"white"}}>|</span><Nav.Link href="/Register">Sign up</Nav.Link>
      </div>
      
    </NavigationBar>
  )
}

export default Navbar;