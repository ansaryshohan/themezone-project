import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import project1 from "../../../public/project1.jpg";
import project2 from "../../../public/project2.jpg";
import project3 from "../../../public/project3.jpg";
import TopHeader from "../topHeader/TopHeader";
import SingleProjectCard from "./SingleProjectCard";

const projectDetails = [
  {
    image: project1,
    title: "Themezone Academy",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi cumque aliquam reiciendis atque numquam?",
  },
  {
    image: project2,
    title: "The Banking System",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi cumque aliquam reiciendis atque numquam?",
  },
  {
    image: project3,
    title: "E-easy Commerce",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi cumque aliquam reiciendis atque numquam?",
  },
];

class Projects extends Component {
  render() {
    return (
      <div className="pt-5 mt-2 pb-5 mb-3">
        <TopHeader title="Recent projects" />
        <Container>
          <Row className="d-flex justify-content-between align-items-center row-gap-3" xs={1} md={2} lg={3}>
            {projectDetails.map((singleProject, index) => (
              <SingleProjectCard key={index} singleProject={singleProject} />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;
