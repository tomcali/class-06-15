// Key Differences: In the SearchResults component we are making an API call as
// soon as the app loads.

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions
} from 'react-native';

import SearchResults from './SearchResults.js';
import popcornImg from './popcorn.png';

class MovieSearchApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            <Text
              style={{
                color: 'white'
              }}
            >
            OMDB Movie Search
            </Text>
          </Text>
        </View>
        <View>
          <TextInput
            autoFocus
            style={styles.input}
            placeholderTextColor="white"
            placeholder="Search"
          />
          <SearchResults />
        </View>
        <View style={styles.footer} />
        <Image source={popcornImg} style={styles.icon} />
      </View>
    );
  }
}

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 60,
    backgroundColor: 'rgba(76,217,175,1)',
    marginBottom: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 12,
    fontWeight: 'bold',
    color: 'white'
  },
  input: {
    color: 'white',
    margin: 10,
    height: 45,
    paddingLeft: 10,
    backgroundColor: 'rgba(76,217,175,1)',
    fontSize: 18,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: screenWidth,
    backgroundColor: 'rgba(76,217,175,1)'
  },
  icon: {
    width: 90,
    height: 90,
    position: 'absolute',
    left: (screenWidth / 2 - 45),
    bottom: 0
  }
});

AppRegistry.registerComponent('MovieSearchApp', () => MovieSearchApp);
