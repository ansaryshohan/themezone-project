import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";

class SingleCourseCard extends Component {
  render() {
    const { image, title, description } = this.props.singleCourse;
    return (
      <Col>
        <Card className=" d-flex flex-row" >
          <div className="w-50">
          <Card.Img variant="" src={image} className="img-fluid h-100" />
          </div>
          <div  className="w-50">
          <Card.Body className="w-100">
            <Card.Title className="fs-6">{title}</Card.Title>
            <Card.Text className="small">{description}</Card.Text>
            <Button variant="primary" className="small">details</Button>
          </Card.Body>
          </div>
        </Card>
      </Col>
    );
  }
}

export default SingleCourseCard;
