import React from "react";
import { Form, Col, Button } from "react-bootstrap";



function AddWeightInput(){
  return (
    <Form>
  <Form.Row>
    <Col>
      <Form.Label>Add New Weight</Form.Label>
      <Form.Control type="number" placeholder="Add Weight" />
    </Col>
  </Form.Row>
  <Form.Row>
    <Button>ADD WEIGHT</Button>
  </Form.Row>
</Form>
  )
}

export default AddWeightInput;