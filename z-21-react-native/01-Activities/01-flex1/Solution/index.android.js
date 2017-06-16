//
// ─── STYLE 1 (SOLVED) ─────────────────────────────────────────────────────────────
//

// Students: Make this app's layout
// reflect the design in layout1.jpg
// =================================

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Flex1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.header]}>
          <Text style={styles.text}>Header</Text>
        </View>
        <View style={[styles.box, styles.body]}>
          <Text style={styles.text}>Body</Text>
        </View>
        <View style={[styles.box, styles.footer]}>
          <Text style={styles.text}>Footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  // Container element
  container: {
    // We set flex to 1 since it's taking up the whole screen
    flex: 1
  },

  // All boxes get crimson colors.
  box: {
    backgroundColor: 'crimson'
  },

  // NOTE: Flex works on a ratio system.
  // All of the child flex elements add up to eight,
  // so all elements will take up a portion of the screen
  // equal to their flex value divided by the total.
  // In this case: 2/8, 5/8 and 1/8.

  // Header styles
  header: {
    flex: 2, // Two eighths of the screen.
    margin:10,
    alignItems: 'center', // Center elements horizontally.
    justifyContent: 'center' // Center elements vertically.
  },

  // Body styles
  body: {
    flex: 5, // Five eighths of the screen.
    margin:10,
    marginTop: 0,
    marginBottom: 0,
    alignItems: 'center', // Center elements horizontally.
    justifyContent: 'center' // Center elements vertically.
  },

  // Footer styles
  footer: {
    flex: 1, // One eighth of the screen.
    margin: 10,
    alignItems: 'center', // Center elements horizontally.
    justifyContent: 'center' // Center elements vertically.
  },

  // Text styles
  text: {
    color: 'white',
    fontSize: 24
  }
});

AppRegistry.registerComponent('flex1', () => Flex1);
