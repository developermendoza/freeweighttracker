import React from "react";
import { connect } from "react-redux";

const UserInfo = ({auth}) => {
  return (
    <div>
      <h2 style={{fontSize:"2.5rem"}}>Welcome <b style={{textTransform:"capitalize"}}>{ auth.user.name.split(" ")[0] }!</b></h2>
      <h4 style={{color: "grey"}}>Email</h4>
      <h4 style={{fontSize:"1.0rem"}}>{auth.user.email}</h4>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(UserInfo);