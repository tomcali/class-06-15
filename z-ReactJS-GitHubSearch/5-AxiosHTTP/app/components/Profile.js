var React = require("react");
var Router = require("react-router");

// Include the Repos, UserProfile, and Notes Components
var Repos = require("./GitHub/Repos");
var UserProfile = require("./GitHub/UserProfile");

// Let's include the helpers.
var helpers = require("../utils/helpers");


/* Profile manages three two states:
	Bio, Repos
*/
var Profile = React.createClass({
  /* This will set the initial state for any state the component handles. usually empty data*/
  getInitialState: function() {
    return {
      bio: {
        name: "Ahmed Haque"
      },
      repos: ["a", "b", "c"]
    };
  },

  componentDidMount: function() {
    console.log("MOUNTED");
    helpers.getGithubInfo(this.props.params.username)
      .then(function(data) {
        this.setState({
          bio: data.bio,
          repos: data.repos
        });
          // This bind function allows us to reference the higher level this
          // and not the "this" in the smaller context function.
      }.bind(this));
  },
  render: function() {
    /* Props object shows us everything that is being passed. Including params.*/
    console.log(this.props);
    return (

      <div className="row">

        <div className="col-md-4">
          {/* You will grab state.repos as childRepos*/}
          {/* Then to obtain data we can grab it from this.props.repos.*/}
          {/* this.props.childRepos allows us to access data at any higher component*/}
          {/* Single curly braces has variables*/}
          {/* Also note how we include the UserProfile component and pass in values for the username and bio*/}
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>

        <div className="col-md-8">
          <Repos repos={this.state.repos} />
        </div>
      </div>
    );
  }
});

module.exports = Profile;
