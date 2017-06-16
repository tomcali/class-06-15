import React, { Component } from "react";

// Importing our dropdown component
import Dropdown from "./Dropdown";

// Defining a list of dropwdown options here
const dropdownOptions = [
  {
    text: "Show Lorem",
    value: "SHOW_LOREM"
  }, {
    text: "Show Cat Picture",
    value: "SHOW_CAT"
  }, {
    text: "Show Nothing",
    value: "SHOW_NONE"
  }
];


class Panel extends Component {
  // Initializing our dropdownOptions on state, setting a default selected option
  // Also setting all of our possible options using the dropdownOptions variable
  constructor() {
    super();
    this.state = {
      dropdownOptions,
      selected: {
        text: "Show Lorem",
        value: "SHOW_LOREM"
      }
    };
    // Binding our custom methods to our class
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
  }
  // This function is called by the Dropdown component whenever an option is chosen
  handleDropdownSelect(option) {
    // Setting this.state.selected to the dropdown option the user clicks
    this.setState({ selected: option });
  }
  renderItems() {
    // Destructuring the value property off of this.state.selected for easier access
    // Naming this new variable selectedValue for clarity
    const { value: selectedValue } = this.state.selected;
    // If this.state.selected.value is "SHOW_LOREM", then return a paragraph of lorem ipsum
    if (selectedValue === "SHOW_LOREM") {
      return (
        <p>Consectetur tempor elit ullamco voluptate minim aliqua sit quis veniam veniam sunt.
         Anim ipsum in laborum non velit magna Lorem.
         Nisi nisi reprehenderit est cillum magna excepteur culpa.
        </p>
      );
    }
    // If this.state.selected.value is "SHOW_CAT", then return an image of a cat
    else if (selectedValue === "SHOW_CAT") {
      return (
        <img
          width="400"
          alt="Funny Cat"
          src="https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"
        />
      );
    }
    // The only other option is "SHOW NOTHING"
    return null;
  }
  render() {
    return (
      <div className="panel panel-default">
        <div
          style={styles.panelHeadingStyle}
          className="panel-heading"
        >
          Choose One!
          <Dropdown
            style={styles.dropdownStyle}
            options={this.state.dropdownOptions}
            selected={this.state.selected}
            handleSelect={this.handleDropdownSelect}  
          />
        </div>
        <div className="panel-body">
          {/*
          The renderItems method returns different JSX depending on our
          component's state
          */}
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

const styles = {
  dropdownStyle: {
    float: "right",
    bottom: 10
  },
  panelHeadingStyle: {
    padding: 20
  }
};

export default Panel;
