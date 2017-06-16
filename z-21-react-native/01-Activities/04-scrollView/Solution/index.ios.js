//
// ─── SCROLLVIEW SOLVED ──────────────────────────────────────────────────────────
//

// Students: Place a ScrollView component
// between the header and footer of this document.
// Don't forget to nest this ScrollView in parent View component.
//
// When you complete that, scroll down to the StyleSheet
// and add in the proper height values
// using the Dimensions API.
// =============================================================

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';


class Scroll extends Component {

  render() {
    return (
      /* Container for all rows */
      <View>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>The React Times</Text>
        </View>

        {/* Body */}
        <View style={styles.body}>
          <ScrollView>

            <Text style={styles.bodyHeadline}>Latest Story</Text>

            <Text style={styles.bodyText}>
              "I think I remember some such story as you were telling," said Flask, 
              when at last the two boats were slowly advancing with their burden towards the ship, 
              "but I can't remember where."
            </Text>

            <Text style={styles.bodyText}>
              "Three Spaniards? Adventures of those three bloody-minded soladoes? 
              Did ye read it there, Flask? I guess ye did?"
            </Text>

            <Text style={styles.bodyText}>
              "No: never saw such a book; heard of it, though. But now, tell me, Stubb,
              do you suppose that that devil you was speaking of just now, 
              was the same you say is now on board the Pequod?"
             </Text>

            <Text style={styles.bodyText}>
              "Am I the same man that helped kill this whale? Doesn't the devil live for ever; 
              who ever heard that the devil was dead? Did you ever see any parson a wearing mourning for the devil? 
              And if the devil has a latch-key to get into the admiral's cabin, 
              don't you suppose he can crawl into a porthole? Tell me that, Mr. Flask?"
            </Text>

            <Text style={styles.bodyText}>
              "How old do you suppose Fedallah is, Stubb?"
            </Text>

          </ScrollView>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Copyright 2016</Text>
        </View>

      </View>
    );
  }
}
// Capture the height and width based on the size of the window (we don't need the width here')
const { height } = Dimensions.get('window');

// Divide our height in increments of 24
// for setting the heights, margins and paddings
// of our components.
const heightInc = height / 24;

// Our StyleSheet
const styles = StyleSheet.create({

  // Header styles
  header: {
    paddingTop: heightInc * 1,
    paddingBottom: heightInc * .5,
    alignItems: 'center',
    backgroundColor: 'crimson'
  },

  // Header Text
  headerText: {
    fontSize: heightInc * 1.5,
    margin: 0,
    padding: 0,
    color: 'white',
    fontFamily: 'Academy Engraved LET',
    fontWeight: '500'
  },

  // Body Styles
  body: {
    height: heightInc * 17.5,
    margin: heightInc * .5
  },

  // Body Text
  bodyText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'justify'
  },

  // Headline Text
  bodyHeadline: {
    fontSize: 36,
    textAlign: 'center',
    fontFamily: 'Optima-bold',
    margin: 10,
    marginBottom: 20
  },

  // Footer Styles
  footer: {
    paddingTop: heightInc * .75,
    paddingBottom: heightInc * 1,
    alignItems: 'center',
    backgroundColor: 'crimson'
  },

  // Footer Text
  footerText: {
    fontSize: heightInc * .5,
    color: 'white'
  }
});

AppRegistry.registerComponent('scrollView', () => Scroll);
