import React from "react";
import {Navbar as NavigationBar, Nav } from 'react-bootstrap'


const Navbar = () => {
  return (
    <NavigationBar bg="dark" variant="dark" style={{display:"flex", justifyContent:"space-between"}}>
      <NavigationBar.Brand href="/Landing">{' '}
        Free Weight Tracker
      </NavigationBar.Brand>
      <Nav.Link href="/login">Login</Nav.Link>
    </NavigationBar>
  )
}

export default Navbar;