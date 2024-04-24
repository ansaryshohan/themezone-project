import { Component } from 'react';

class TopHeader extends Component {
  render() {
    return (
      <h3 className="text-uppercase fs-3 fw-semibold blueText text-center mb-4 pb-3">
          {this.props.title}
        </h3>
    );
  }
}

export default TopHeader;