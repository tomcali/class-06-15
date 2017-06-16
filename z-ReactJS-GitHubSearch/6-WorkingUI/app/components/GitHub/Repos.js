var React = require("react");

// Here we create a component to hold the repos informatino
var Repos = React.createClass({
  render: function() {

    // Map the repos and loop through
    var repos = this.props.repos.map(function(repo, index) {

      return (
        <div>
          <li className="list-group-item" key={index}>
            {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
            {repo.description && <p>{repo.description}</p>}
          </li>
        </div>
      );
    });

    return (
      <div>
        <h3> User Repos </h3>
        <ul className="list-group">
          {repos}
        </ul>
      </div>
    );
  }
});

// We then export the Repos component
module.exports = Repos;
