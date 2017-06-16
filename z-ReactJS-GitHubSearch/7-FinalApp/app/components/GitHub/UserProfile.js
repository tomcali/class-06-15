var React = require("react");

// Here we create a component for UserProfile
var UserProfile = React.createClass({
  render: function() {
    return (
      <div>
        {/* Here we display all of the contents in the objects*/}
        {/* Most importantly we use the && as a shorthand way of creating if-else inside of the JSX*/}
        {/* JSX won't let us use traditional if-else... so we can either include an if-else before, or use creative tricks like this*/}
        {/* You can read more about how the && works here: http://stackoverflow.com/questions/7310109/whats-the-difference-between-and-in-javascript */}
        {this.props.bio.avatar_url && <li className="list-group-item"> <img src={this.props.bio.avatar_url} className="img-rounded img-responsive" /></li>}
        {this.props.bio.login && <li className="list-group-item">Username: {this.props.bio.login}</li>}
        {this.props.bio.name && <li className="list-group-item">Name: {this.props.bio.name}</li>}
        {this.props.bio.email && <li className="list-group-item">Email: {this.props.bio.email}</li>}
        {this.props.bio.location && <li className="list-group-item">Location: {this.props.bio.location}</li>}
        {this.props.bio.company && <li className="list-group-item">Company: {this.props.bio.company}</li>}
        {this.props.bio.followers && <li className="list-group-item">Followers: {this.props.bio.followers}</li>}
        {this.props.bio.blog && <li className="list-group-item">Link: <a href={this.props.bio.blog}> {this.props.bio.blog}</a></li>}

      </div>
    );

  }
});

/* We then export the UserProfile component*/
module.exports = UserProfile;
