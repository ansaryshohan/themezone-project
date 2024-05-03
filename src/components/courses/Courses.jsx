import { Component } from 'react';
import TopHeader from '../topHeader/TopHeader';
import { Container, Row } from 'react-bootstrap';
import course1 from "../../../public/course1.jpg"
import course2 from "../../../public/course2.jpg"
import course3 from "../../../public/course3.jpg"
import course4 from "../../../public/course4.jpg"
import SingleCourseCard from './SingleCourseCard';

// eslint-disable-next-line react-refresh/only-export-components
export const coursesDetails = [
  {
    image: course1,
    title: "Web Development",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi cumque aliquam reiciendis atque numquam?",
  },
  {
    image: course2,
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi cumque aliquam reiciendis atque numquam?",
  },
  {
    image: course3,
    title: "Graphics Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi cumque aliquam reiciendis atque numquam?",
  },
  {
    image: course4,
    title: "Social Media Marketing",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi cumque aliquam reiciendis atque numquam?",
  },
  {
    image: course1,
    title: "Web Development",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi cumque aliquam reiciendis atque numquam?",
  },
  {
    image: course2,
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi cumque aliquam reiciendis atque numquam?",
  },
  {
    image: course3,
    title: "Graphics Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi cumque aliquam reiciendis atque numquam?",
  },
  {
    image: course4,
    title: "Social Media Marketing",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi cumque aliquam reiciendis atque numquam?",
  },
];

class Courses extends Component {
  render() {
    return (
      <div className='py-5 mb-4'>
        <TopHeader title="Our courses"/>
        <Container>
        <Row xs={1} md={2} className="g-4">
          {
            coursesDetails.slice(0,4).map((singleCourse,index)=><SingleCourseCard key={index} singleCourse={singleCourse}/>)
          }
        </Row>
        </Container>
      </div>
    );
  }
}

export default Courses;