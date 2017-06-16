var React = require("react");

// Here we create a component to hold the repos informatino
var Repos = React.createClass({
  render: function() {
    return (
      <div>
        <p> Repos </p>
        {/* Here we will be grabbing the property associated with the larger component "Profile"*/}
        <p> {this.props.repos}</p>
      </div>
    );
  }
});

/* We then export the Repos component*/
module.exports = Repos;
