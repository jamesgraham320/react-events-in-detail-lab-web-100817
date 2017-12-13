// Code DelayedButton Component Here
import React, { Component } from "react";

class DelayedButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          onClick={event => {
            event.persist();
            setTimeout(
              () => this.props.onDelayedClick(event),
              this.props.delay
            );
          }}
        >
          Click me!
        </button>
      </div>
    );
  }
}

export default DelayedButton;
