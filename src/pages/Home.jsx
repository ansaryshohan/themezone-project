import  { Component } from 'react';
import NavBar from '../components/navbar/NavBar';
import Hero from '../components/hero/Hero';
import Services from '../components/service/Services';
import TechChart from '../components/techChart/TechChart';
import Counter from '../components/counter/Counter';
import Projects from '../components/projects/Projects';
import Courses from '../components/courses/Courses';
import VideoSection from '../components/videoSection/VideoSection';
import ReviewSlider from '../components/ReviewSlider/ReviewSlider';
import Footer from '../components/Footer/Footer';

class Home extends Component {
  render() {
    return (
      <>
        <NavBar/>
        <Hero/>
        <Services/>
        <TechChart/>
        <Counter/>
        <Projects/>
        <Courses/>
        <VideoSection/>
        <ReviewSlider/>
        <Footer/>
        <div className='endDiv'></div>
      </>
    );
  }
}

export default Home;