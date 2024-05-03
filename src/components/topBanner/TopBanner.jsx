import  { Component } from 'react';
import "./topBanner.css"

class TopBanner extends Component {
  render() {
    return (
      <div className="banner-image">
        <div className="banner-overlay d-flex justify-content-center align-items-center">
            <h2 className="">{this.props.title}</h2>
        </div>
      </div>
    );
  }
}

export default TopBanner;