import { Component } from "react";
// import NavBar from "../components/navbar/NavBar";
import TopBanner from "../components/topBanner/TopBanner";
import Services from "../components/service/Services"
// import Footer from "../components/Footer/Footer";
import ContactMe from "../components/contactMe/ContactMe";

class ServicesPage extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <TopBanner title="My Services" />
        <Services/>
        <ContactMe/>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default ServicesPage;
