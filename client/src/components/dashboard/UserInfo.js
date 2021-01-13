import React from "react";
import { connect } from "react-redux";

const UserInfo = ({auth}) => {
  console.log("auth: ", auth)
  return (
    <div>
      <h2>Welcome <b style={{textTransform:"capitalize"}}>{ auth.user.name.split(" ")[0] }!</b></h2>
      <h4>Email</h4>
      <h4>{auth.user.email}</h4>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(UserInfo);