import React from "react";
import { Button } from "react-bootstrap";

const DeleteWeightsButton = ({handleShow}) => {
  return (
    <div className="button-wrapper">
    <Button className="button" onClick={handleShow} variant="danger">DELETE ALL</Button>
    </div>
  )
}

export default DeleteWeightsButton;