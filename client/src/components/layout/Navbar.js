import React, { Component } from "react";
import {Navbar as NavigationBar, Nav } from 'react-bootstrap'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from  "../../actions/authActions"

class Navbar extends Component{

  onLogoutClick = (e) => {
    e.preventDefault()
    this.props.logoutUser();
  }

  render(){
    return (
      <NavigationBar fixed="top" bg="dark" variant="dark" style={{display:"flex", justifyContent:"space-between"}}>
        <NavigationBar.Brand href="/">{' '}
          Free Weight Tracker
        </NavigationBar.Brand>
        <div style={{display: "flex", alignItems:"center"}}>
        {this.props.auth.isAuthenticated ? <Nav.Link onClick={this.onLogoutClick}>Logout</Nav.Link> : <>
        <Nav.Link href="/login">Login</Nav.Link><span style={{color:"white"}}>|</span><Nav.Link href="/Register">Sign up</Nav.Link>
        </> }
        </div>
      </NavigationBar>
    )
  }
  
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
}

const  mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps,{ logoutUser })(Navbar);