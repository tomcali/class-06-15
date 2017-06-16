import React from "react";
import ReactDOM from "react-dom";

// Import the List component
import List from "./components/List";

class App extends React.Component {
  constructor() {
    super();
    // Set the initial state for listData
    this.state = {
      listData: [
        {
          id: "a3tr0tzbakwl2vivbo6r",
          text: "Learn React",
          complete: true
        },
        {
          id: "st0b279p76aoykb21emi",
          text: "Learn ES6",
          complete: true
        },
        {
          id: "lot0wx5rtelfcqb54gqfr",
          text: "Get Developer Jobs",
          complete: false
        }
      ]
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <List style={styles.listStyle} data={this.state.listData} />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  listStyle: {
    marginTop: 50
  }
};

ReactDOM.render(<App />, document.getElementById("app"));
