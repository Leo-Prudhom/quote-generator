import React, { Component } from "react";

class QuoteFrame extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.author}</h3>
        <p>{this.props.quote}</p>
      </div>
    );
  }
}

export default QuoteFrame;
