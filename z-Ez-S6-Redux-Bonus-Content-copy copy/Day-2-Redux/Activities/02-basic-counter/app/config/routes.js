//Here we have to construct our routes using built in React Router components.
//It is VERY important to note that browserHistory navigation with react-router version 3 or under can get persnickity.
//By persnickity, I mean it won't always trigger a re-render properly when using browserHistory.push('url').
//The cause is redux and react-router not keeping in sync. This is solved by using this package: https://github.com/reactjs/react-router-redux

//Note that we create a root route that is our Main(main application file),
//and an IndexRoute for our welcome component. This is how the parent-child relationship will work with routes.
//We could add as many routes as we want below the IndexRoute, and we would land on the component linked to the IndexRoute first.
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../pages/Main'
import Welcome from '../pages/Welcome'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Welcome} />
    </Route>
  </Router>
);
