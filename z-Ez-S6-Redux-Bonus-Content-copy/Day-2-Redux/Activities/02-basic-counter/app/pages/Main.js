//Here we grab React, and peel component out of the library using ES6 syntax.
import React, { Component } from 'react'
import { Container } from 'react-grid-system'


// --------------Setup for Material-Ui -----------------------------
//This is our CSS plugin setup! We need to use injectTapEventPlugin for mobile usability.
//Wrapping our app in MuiThemeProvider and Container allows us to use certain CSS classes and automatically
//get the CSS applied to our components, just like when we used BootStrap!
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
// -----------------------------------------------------------------

//We render {this.props.children} inside our container because we want the rest of the application to render there
export default class Main extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Container>
          {this.props.children}
        </Container>
      </MuiThemeProvider>
    );
  }
}
