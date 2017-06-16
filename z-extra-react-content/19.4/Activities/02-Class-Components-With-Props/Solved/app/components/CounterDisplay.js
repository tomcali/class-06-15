import React from "react";

// To use props in class components, reference `this.props`
class CounterDisplay extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1>{this.props.count}</h1>
      </div>
    );
  }
}

export default CounterDisplay;
