import React, { Component } from "react";
import {Navbar as NavigationBar, Nav } from 'react-bootstrap'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from  "../../actions/authActions"
import { Link } from  "react-router-dom"

class Navbar extends Component{

  onLogoutClick = (e) => {
    e.preventDefault()
    this.props.logoutUser();
  }

  render(){
    return (
      <NavigationBar fixed="top" bg="dark" variant="dark" style={{display:"flex", justifyContent:"space-between"}}>
        <Link to="/">{' '}
          Free Weight Tracker
        </Link>
        <div style={{display: "flex", alignItems:"center"}}>
        {this.props.auth.isAuthenticated ? <Nav.Link onClick={this.onLogoutClick}>Logout</Nav.Link> : <>
        <Link to="/login">Login</Link>
        <span style={{color:"white"}}>|</span><Link to="/register">Sign up</Link>
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