import  { Component } from 'react';
import TopHeader from '../topHeader/TopHeader';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCirclePlay } from "react-icons/fa6";

class VideoSection extends Component {
  render() {
    return (
      <div className='py-5'>
        <Container className='border p-5 rounded'>
        <TopHeader title="How I Do"/>
        <Row>
          <Col className='text-center'>
            <p>If you are new to mobile development, the easiest way to get started is with Expo Go. Expo is a set of tools and services built around React Native and, while it has many features, the most relevant feature for us right now is that it can get you writing a React Native app within minutes. You will only need a recent version of Node.js and a phone or emulator.</p>

              <FaCirclePlay size={60} color='#0073E7'/>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default VideoSection;