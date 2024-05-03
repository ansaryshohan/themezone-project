import  { Component } from 'react';
import TopBanner from '../components/topBanner/TopBanner';
// import NavBar from '../components/navbar/NavBar';
// import Footer from '../components/Footer/Footer';
import SingleCourseCard from '../components/courses/SingleCourseCard';
import {Container,Row} from "react-bootstrap"
import { coursesDetails } from '../components/courses/Courses';

class AllCoursesPage extends Component {
  render() {
    return (
      <div>
        {/* <NavBar/> */}
        <TopBanner title="All Courses"/>
        <Container className="mt-5 pt-5">
        <Row xs={1} md={2} className="g-4">
          {
            coursesDetails.map((singleCourse,index)=><SingleCourseCard key={index} singleCourse={singleCourse}/>)
          }
        </Row>
        </Container>
        {/* <Footer/> */}
        
      </div>
    );
  }
}

export default AllCoursesPage;