import { Component } from 'react';
// import NavBar from '../components/navbar/NavBar';
// import Footer from '../components/Footer/Footer';
import Projects from '../components/projects/Projects';
import TopBanner from '../components/topBanner/TopBanner';

class PortfolioPage extends Component {
  render() {
    return (
      <div>
        {/* <NavBar/> */}
        <TopBanner title="My Portfolio"/>
        <Projects/>
        {/* <Footer/> */}
        
      </div>
    );
  }
}

export default PortfolioPage;