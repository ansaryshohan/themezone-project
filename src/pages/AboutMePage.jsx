import { Component } from "react";
// import Footer from "../components/Footer/Footer";
// import NavBar from "../components/navbar/NavBar";
import TopBanner from "../components/topBanner/TopBanner";
import {Container} from "react-bootstrap"

class AboutMePage extends Component {
  render() {
    return (
      <>
        {/* <NavBar /> */}
        <TopBanner title="About Me " />
        <Container className="mt-5 py-2">
          <h3>Who am I</h3>
          <p>
            Founded and run by two longtime friends, Shleps was born out of a
            shared thirst for a challenge and a vision for environmentally and
            socially sustainable business. The first pair of Shleps was knit by
            Edu{"'"}s grandma - as a gift for a climbing grandson.
          </p>
          <h3>Mission</h3>
          <p>
          Wasn{"'"}t long before people in the climbing gym started noticing and
            putting ideas into our heads - so here we are! Although difficult to
            replicate at scale, with each pair we seek to embed at least some of
            the warmth and good will out of which the original pair was born
          </p>
          <h3>Vision</h3>
          <p>
            Wasn{"'"}t long before people in the climbing gym started noticing and
            putting ideas into our heads - so here we are! Although difficult to
            replicate at scale, with each pair we seek to embed at least some of
            the warmth and good will out of which the original pair was born
          </p>
        </Container>
        {/* <Footer /> */}
      </>
    );
  }
}

export default AboutMePage;
