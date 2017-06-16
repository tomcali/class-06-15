import React, { Component } from "react";

// Importing our listItem component
import ListItem from "./ListItem";

// Importing an array of grocery data to use
import groceries from "../../groceries";

class ListContainer extends Component {
  // Defining a constructor method where we set our initial state
  constructor() {
    // Calling super() here before we start assigning values
    super();
    // Setting this.state.groceries to our groceries array we imported
    this.state = {
      groceries
    };
  }
  renderList() {
    // Getting an array of only purchased items
    const filteredList = this.state.groceries.filter(item => item.purchased === true);
    // Mapping and through our filteredList and returning one
    // ListItem component with the list object passed through as props
    return filteredList.map(item => (
      <ListItem key={item.id}>
        {item.text}
      </ListItem>
      ));
  }
  render() {
    // Run {this.renderList()} inside the div to return the result of the method
    return (
      <div className="text-center">
        <h1>Purchased Groceries</h1>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

// Exporting this component as the default (only) export
export default ListContainer;
