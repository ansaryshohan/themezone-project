import  { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleCounter from './SingleCounter';
import CounterDetails from './CounterDetails';

class Counter extends Component {
  render() {
    return (
      <div className='counter-section py-3 mb-4'>
        <Container>
          <Row className='d-flex align-items-center py-3'>
            <Col>
              <SingleCounter count='100' title={"Clients"}/>
            </Col>
            <Col>
              <SingleCounter count="250" title={"Projects"}/>
            </Col>
            <Col>
              <CounterDetails/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Counter;