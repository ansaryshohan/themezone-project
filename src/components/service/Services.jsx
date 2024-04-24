import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { BsFileCode } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa6";
import { LiaPenFancySolid } from "react-icons/lia";
import TopHeader from "../topHeader/TopHeader";
import ServicesCard from "./ServicesCard";

class Services extends Component {
  constructor() {
    super();
    this.cardTextArray = [
      {
        title: "Web Development",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia expedita similique sunt quae nihil unde qui",
        icon: <FaLaptopCode size={70} color="#0073E7" />,
      },
      {
        title: "Mobile Application",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia expedita similique sunt quae nihil unde qui",
        icon: <BsFileCode size={70} color="#0073E7" />,
      },
      {
        title: "Graphics Design",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia expedita similique sunt quae nihil unde qui",
        icon: <LiaPenFancySolid size={70} color="#0073E7" />,
      },
    ];
  }

  render() {
    return (
      <Container className="mt-5 pb-5 mb-5">
        <TopHeader title={"my services"} />
        <Container>
          <Row
            className="d-flex justify-content-around align-items-center mt-5 gap-3"
            xs={1} lg={4} md={3}
          >
            {this.cardTextArray.map((cardText, index) => (
              <ServicesCard key={index} cardText={cardText} />
            ))}
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Services;
