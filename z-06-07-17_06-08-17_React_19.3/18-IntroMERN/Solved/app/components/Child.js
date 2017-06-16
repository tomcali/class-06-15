// Include React
import React, { Component } from "react";

// Here we include all of the sub-components
import GrandChild from "./Grandchild";

// Create the Child Component
export default class Child extends Component {

  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }
  // Child has a state that follows the number of clicks

  render = () => {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Child</h3>
        </div>
        <div className="panel-body text-center">

          {/*
            This component recieves a clicks variable as a prop from it's parent.
            See line 64 of Parent.jsx
          */}
          <h1>{this.state.number + 2 * this.props.clicks}</h1>

          {/*
            This component will then render the GrandChild component. It will give GrandChild a prop
            called "number" which will be calculated by multiplying this.state.number and this.props.clicks
          */}
          <GrandChild number={this.state.number + 2 * this.props.clicks} />

        </div>
      </div>
    );
  }
};
