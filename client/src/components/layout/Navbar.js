import React, { Component } from "react";
import {Navbar as NavigationBar, Dropdown } from 'react-bootstrap'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from  "../../actions/authActions"
import { Link } from  "react-router-dom";

class Navbar extends Component{

  onLogoutClick = (e) => {
    e.preventDefault()
    this.props.logoutUser();
  }
  render(){
    return (
      <NavigationBar fixed="top" bg="dark" variant="dark" style={{display:"flex", justifyContent:"space-between", padding:"20px", boxShadow: "rgb(0, 0, 0) 0px 20px 30px -10px" }}>
      
        <Link className="logo" to="/">{' '}
          Free Weight Tracker
        </Link>
        {this.props.auth.isAuthenticated ? 
          <Dropdown>
            <Dropdown.Toggle id="dropdown-menu-align-left"  style={{background:"transparent", border:"none"}}>
            <i className="far fa-user-circle"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{left: "-104px"}}>
              <Dropdown.Item onClick={this.onLogoutClick}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
         : <div className="navbar-auth-links" style={{display: "flex"}}>
        <Link to="/login" >Login</Link>
        <span style={{color:"white", padding: "0 10px"}}>|</span>
        <Link to="/register">Sign up</Link>
        </div> }
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