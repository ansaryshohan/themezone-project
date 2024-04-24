import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class ServicesCard extends Component {
  render() {
    const { title, description, icon } = this.props.cardText;
    return (
      <Col>
        <Card>
          <div className="icon-div">{icon}</div>
          <Card.Body className="text-center">
            <Card.Title className="fs-4 fw-bold">{title}</Card.Title>
            <Card.Text className="fs-6 fw-normal">{description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default ServicesCard;
