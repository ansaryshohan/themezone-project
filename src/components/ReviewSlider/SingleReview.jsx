import { Component } from "react";
import { Container } from "react-bootstrap";

class SingleReview extends Component {
  render() {
    return (
      <div className="py-3 counter-section">
        <Container className=" d-flex flex-column justify-content-around align-items-center gap-2">
          <div className="user-img my-4">
            <img src={this.props.image} alt="" />
          </div>
          <div className="text-center pb-2 text-white">
            <p>
              Sumanta is an amazing character to work with, he manages things so
              simply and smoothly which is hard to ge nowadays.
            </p>
            <h3>{this.props.name}</h3>
            <p>Pepsi co.</p>
          </div>
        </Container>
      </div>
    );
  }
}

export default SingleReview;
