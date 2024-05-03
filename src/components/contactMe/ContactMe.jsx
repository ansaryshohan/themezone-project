import { Component } from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import {Container}from "react-bootstrap"

class ContactMe extends Component {
  render() {
    return (
      <Container className="d-flex justify-content-around gap-4 py-5"> 
      <div className="w-50">
        <ContactForm />
      </div>
      <div className="w-50">
        <ContactDetails />
      </div>
      </Container>
    );
  }
}

export default ContactMe;
