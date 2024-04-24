import  { Component } from 'react';
import "./hero.css"
import { Button } from 'react-bootstrap';

class Hero extends Component {
  render() {
    return (
      <div className='hero-section'>
        <div className="hero-overlay d-flex flex-column justify-content-center align-items-center whiteText">
          <div className='text-center d-flex flex-column align-items-center gap-2'>
            <h1 className='text-uppercase fs-1 fw-bolder'>Software Engineer</h1>
            <h3 className='fs-5 fw-medium'>Mobile & Web Application</h3>
            <Button variant='primary' className='w-50'>More Info</Button>
          </div>

        </div>
      </div>
    );
  }
}

export default Hero;