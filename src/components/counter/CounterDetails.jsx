import { Component } from "react";
import { FaCheckCircle } from "react-icons/fa";

class CounterDetails extends Component {
  render() {
    return (
      <div className="bg-white d-flex flex-column align-items-center py-4 px-2 rounded">
        <h3 className=" fs-4 fw-semibold">How i Work</h3>
        <div>
          <p>
            <FaCheckCircle color="#0073E7" /> <span className="fs-6 fw-light"> Requirement Gathering</span> 
          </p>
          <p>
            <FaCheckCircle color="#0073E7" /> <span className="fs-6 fw-light"> System Analysis</span>
          </p>
          <p>
            <FaCheckCircle color="#0073E7" /> <span className="fs-6 fw-light"> Code Testing</span> 
          </p>
          <p>
            <FaCheckCircle color="#0073E7" /> <span className="fs-6 fw-light"> Implementation</span> 
          </p>
        </div>
      </div>
    );
  }
}

export default CounterDetails;
