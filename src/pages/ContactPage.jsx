import { Component } from 'react';
import TopBanner from '../components/topBanner/TopBanner';
import ContactMe from '../components/contactMe/ContactMe';
// import Footer from '../components/Footer/Footer';
// import NavBar from '../components/navbar/NavBar';

class ContactPage extends Component {
  render() {
    return (
      <div>
        {/* <NavBar/> */}
        <TopBanner title="Contact Me"/>
        <ContactMe/>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default ContactPage;