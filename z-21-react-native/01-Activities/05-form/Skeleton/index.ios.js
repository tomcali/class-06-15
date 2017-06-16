//
// ─── FORM EXERCISE ──────────────────────────────────────────────────────────────
//

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  // Notice these imports:
  TextInput,
  TouchableOpacity

} from 'react-native';

class Form extends Component {
  // We make a constructor to initialize our states.
  constructor() {
    super();
    this.state = {
      message: '',
      revealed: false,
      inputText: ''
    };
  }

  // This will set our message to the input text
  // and then change input text to a blank string.
  setMessage() {
    // TODO
    // ====
    // Write the contents of this function. 
    // It should set the message state to the value of the TextInput
    // and set the TextInput's Value to a blank string.
  }

  // This will toggle the display of our message box.
 toggleDisplay() {
    var revealed = this.state.revealed;
    this.setState({
      // TODO
      // ====
      // Toggle the value of the state
      // that controls whether the message is visible.
    });
  }

  // Our render function.
  render() {
    return (
      // Container
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>State Changer!</Text>
        </View>

        {/* Our TextInput container.*/}

        <View style={styles.inputContainer}>

        {/* TODO
          * ====
          * Write out the TextInput component. 
          * Make the value prop equal the inputText state.
          * Set the placeholder prop to "Enter Message Here!".
          * Setup the onTextChange prop to change the property
          * of inputText to whatever characters the user enters.
          *
          * PROTIP: You'll find a rundown of the textInput component here!
          * https://facebook.github.io/react-native/docs/textinput.html
          *
          * Below, you'll find button that will set 
          * the message state to the input box's value.
          * You just need to write the function that alters the state.
          *
          */}

          <TouchableOpacity style={styles.setter} onPress={this.setMessage.bind(this)}>
            <Text style={styles.setterText}>Submit</Text>
          </TouchableOpacity>
        </View>

        {/* The Message Container */}
        <View style={styles.messageContainer}>

          {/* TODO
            * ====
            * Create a Message Revealer button using TouchableOpacity.
            * Connect thetoggleDisplay function to the onPress prop,
            * and don't forget to add .bind(this) to the function call.
            * Use styles.revealer for TouchableOpacity
            * and styles.revealerText for the button's text.
            *
            * BONUS: Change the text of the button to match whether pressing it
            * will reveal the message or hide it.
            *
            */}

          {/* The Message Subcontainer (holds the actual message) */}

          {/* Notice how we only show this if the revealed state is true. */}
          {this.state.revealed &&
            (
            <View style={styles.messageSubContainer}>
              <Text style={styles.messageText}>{this.state.message}</Text>
            </View>
            )
          }
        </View>

        {/*Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Copyright &copy;2016</Text>
        </View>
      </View>
    );
  }
}

// Our stylesheet
const styles = StyleSheet.create({

  // Our primary container
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF'
  },

  // Our header
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'crimson'
  },

  // Our header text
  headerText: {
    fontSize: 36,
    color: 'white'
  },

  // Our input container
  inputContainer: {
    flex: 4,
    margin: 10,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'crimson'
  },

  // Our textInput
  textInput: {
    marginLeft:10,
    marginRight:10,
    height: 40,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e2e2'
  },

  // Our setter button
  setter: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5
  },

  // The text of our setter button
  setterText:{
    fontSize: 16,
    color: 'white'
  },

  // Our message container
  messageContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: 'crimson'
  },

  // Our message revealer button
  revealer: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  // The text of our message revealer button
  revealerText: {
    color: 'white',
    padding: 3,
    fontWeight: '600'
  },

  // Our message sub-container (which houses the actual message)
  messageSubContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },

  // The text of the message
  messageText: {
    color: 'white',
    fontSize: 20
  },

  // Our footer
  footer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'crimson'
  },

  // The text in our footer
  footerText: {
    color: 'white'
  }
});

AppRegistry.registerComponent('form', () => Form);
