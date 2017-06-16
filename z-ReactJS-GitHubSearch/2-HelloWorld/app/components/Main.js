var React = require("react");

// This allows us to render React on the client (and not on the server)
var ReactDOM	= require("react-dom");


// This creates a React Component for us.
// It takes in a few properties that we can pass in...
// One of which is render. Render specifies what the UI looks like for this component
var Main = React.createClass({
  render: function() {

		// Return and parenthesis needs to be on same line.
    return (
      <div>
				Hello World
			</div>
	 );
  }
});

// Tell it which component to render and where we will render it to.
// Then we run webpack -w
ReactDOM.render(<Main />, document.getElementById("app"));
