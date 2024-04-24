import { Component } from "react";
import CountUp from 'react-countup';

class SingleCounter extends Component {
  render() {
    return (
      <div className="whiteText d-flex flex-column justify-content-center align-items-center">
        <h3 className="fs-1 fw-semibold"><CountUp end={this.props.count} enableScrollSpy /></h3>
        <p className="fs-5 fw-normal">TOTAL {this.props.title}</p>
        <div className="divider"></div>
      </div>
    );
  }
}

export default SingleCounter;
