// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          onClick={event => {
            this.props.onReceiveCoordinates([event.clientX, event.clientY]);
          }}
        >
          Click Me!
        </button>
      </div>
    );
  }
}

export default CoordinatesButton;
