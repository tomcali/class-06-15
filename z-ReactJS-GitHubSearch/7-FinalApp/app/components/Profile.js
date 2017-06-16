var React = require("react");
var Router = require("react-router");

// Include the Repos, UserProfile, and Notes Components
var Repos = require("./GitHub/Repos");
var UserProfile = require("./GitHub/UserProfile");

// Let's include the helpers.
var helpers = require("../utils/helpers");


// Profile manages three two states: Bio, Repos

var Profile = React.createClass({
  // This will set the initial state for any state the component handles. usually empty data
  getInitialState: function() {
    return {
      bio: {
        name: ""
      },
      repos: []
    };
  },

  // componentDidMount gets run the moment the components get put onto the page.
  componentDidMount: function() {
    console.log("MOUNTED");
    // Here we run our getGithubInfo function (from our helpers)
    helpers.getGithubInfo(this.props.params.username)
      .then(function(data) {

        // Once we get a response from GitHub,
        // we dump the contents into the components bio and repos "state" variables
        this.setState({
          bio: data.bio,
          repos: data.repos
        });
          // This bind function allows us to reference the higher level this
          // and not the "this" in the smaller context function.
      }.bind(this));
  },
  render: function() {
    // Props object shows us everything that is being passed. Including params.
    console.log(this.props);
    return (

      <div className="row">

        <div className="col-md-4">
          {/* Here we say that the UserProfile component goes here. And then we pass in the username and bio information.*/}
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>


        {/* Here we say that the repos component goes here. And then we pass in the repo information.*/}
        <div className="col-md-8">
          <Repos repos={this.state.repos} />
        </div>
      </div>
    );
  }
});

module.exports = Profile;
