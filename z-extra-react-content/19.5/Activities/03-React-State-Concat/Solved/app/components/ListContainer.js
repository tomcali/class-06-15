import React, { Component } from "react";

// Importing our listItem component
import ListItem from "./ListItem";

// Importing our InputBox component
import InputBox from "./InputBox";

// currentId will be incremented and used as a new unique id each time one is needed
let currentId = 0;

class ListContainer extends Component {
  // Initializing an array for holding comments on state
  constructor() {
    super();
    this.state = {
      comments: [
        {
          id: 0,
          text: "React is awesome!"
        }
      ]
    };
    // Binding addComment method to this component, since we'll be passing it to
    // the InputBox component
    this.addComment = this.addComment.bind(this);
  }
  addComment(text) {
    // addComment expects a new comment's text
    // Creating an object to represent our new comment
    // Making sure the comment has a unique id
    const newComment = {
      id: ++currentId,
      text
    };
    // concat returns a brand new array with the newComment added on
    // We set this.state.comments to this new array
    this.setState({
      comments: this.state.comments.concat(newComment)
    });
  }
  renderList() {
    return this.state.comments.map(item => (
      <ListItem key={item.id}>
        {item.text}
      </ListItem>
    ));
  }
  render() {
    return (
      <div>
        <InputBox addComment={this.addComment} />
        <ul style={styles.listGroupStyle} className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

const styles = {
  listGroupStyle: {
    marginTop: 80
  }
};

// Exporting this component as the default (only) export
export default ListContainer;
