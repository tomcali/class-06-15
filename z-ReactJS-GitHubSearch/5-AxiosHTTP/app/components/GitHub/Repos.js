var React = require("react");

// Here we create a component to hold the repos informatino
var Repos = React.createClass({
  render: function() {

		// console log the query
    console.log("REPOS", this.props.repos);
    return (
      <div>
        <p> Repos </p>
      </div>
	 );
  }
});

/* We then export the Repos component*/
module.exports = Repos;
