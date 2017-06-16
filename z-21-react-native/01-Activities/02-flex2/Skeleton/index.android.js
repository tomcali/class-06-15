//
// ─── STYLE 2 ────────────────────────────────────────────────────────────────────
//

// Students: Make this app's layout
// reflect the design in layout2.jpg
// =================================

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Flex2 extends Component {


  // TODO
  // ====
  // Complete the following render method
  // by nesting View components with 'row' and 'box' styles.

  render() {
    return (
      /* Container for all rows */
      <View style={styles.container}>

        {/* Row 1 */}
          {/* Four boxes */}

        {/* Row 2 */}
          {/* Four boxes */}

        {/* Row 3 */}
          {/* Four boxes */}

        {/* Row 4 */}
          {/* Four boxes */}

        {/* Row 5 */}
          {/* Four boxes */}

        {/* Row 6 */}
          {/* Four boxes */}

        {/* Row 7 */}
          {/* Four boxes */}

      </View>
    );
  }
}

const styles = StyleSheet.create({

  // We set flex to 1 since it's taking up the whole screen.
  container: {
    flex: 1
  },

  row: {
    // TODO:
    // ====
    // Set flex and flex direction to their proper values.
  },

  // Box styles.
  box: {
    backgroundColor: 'crimson'
    // TODO:
    // ====
    // Set the proper values for flex, margin, 
    // alignItems and justifyContent.
  },

  // Text styles.
  text: {
    color: 'white',
    fontSize: 24
  }
});

AppRegistry.registerComponent('flex2', () => Flex2);
