var React = require("react");

// Here we created the home component
var Home = React.createClass({
  render: function() {
    return (
			// Here we use className instead of class because class is a reserved name in JavaScript
			// The converter will take className and call it class.
      <h2 className="text-center">
        Search by GitHub Username Above
      </h2>
    );
  }

});

// Exporting the component effectively means we can deploy the component in any other file.
module.exports = Home;
