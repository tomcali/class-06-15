var React = require("react");

// Here we create a component for UserProfile
var UserProfile = React.createClass({
  render: function() {
		// Console.log the bio object
    console.log("BIO", this.props.bio);
    return (
      <div>
        {/* Here we create a UserProfile html*/}
        <p> USER PROFILE! </p>

        {/* And we draw from the "profile" components properties */}
        <p> Username: {this.props.username} </p>
      </div>
    );
  }
});

/* We then export the UserProfile component*/
module.exports = UserProfile;
