import AddWeightInput from "./AddWeightInput"
import AddWeightDatePicker from "./AddWeightDatePicker"
import { Container, Row, Col } from "react-bootstrap";

const AddWeight = () => {
  return (
    <Container>
      <Row>
        <Col>
          <AddWeightInput />
        </Col>
        <Col>
          <AddWeightDatePicker />
        </Col>
      </Row>
    </Container>
  )
}

export default AddWeight;