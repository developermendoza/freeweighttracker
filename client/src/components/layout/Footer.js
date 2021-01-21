import React from "react";
import moment from "moment";
function Footer () {
  return(
    <footer>
      <p>Free Weight Tracker</p>
      <small>Free Weight Tracker | Demo Application created by Jose Mendoza | {moment(new Date()).format("YYYY")}</small>
    </footer>
  )
}
export default Footer;