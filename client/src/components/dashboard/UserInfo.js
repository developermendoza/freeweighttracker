import React from "react";
import { connect } from "react-redux";

const UserInfo = ({auth}) => {
  console.log("auth: ", auth)
  return (
    <div>
      UserInfo Component
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(UserInfo);