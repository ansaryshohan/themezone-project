import { Component } from 'react';
import {Form,Button} from "react-bootstrap"

class ContactForm extends Component {
  render() {
    return (
      <Form className="w-100">
        <h4 className="fs-4 fw-semibold">
         Quick Connect
        </h4>
      <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
  }
}

export default ContactForm;