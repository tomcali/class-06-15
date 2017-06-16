// Key Differences: Our search box is now connected to the API call. When the
// search is submitted, the value is passed into the SearchResults component.
// When the SearchResults component receives new props, it will run a new API
// call with the new props.

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
  // We are setting the initial state of this.state.movie to ''.
  constructor(props) {
    super(props);
    this.state = {
      movie: ''
    };
    this.renderSearch = this.renderSearch.bind(this);
    this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
  }
  handleMovieSubmit(event) {
    this.setState({ movie: event.nativeEvent.text });
  }
  renderSearch() {
    if (this.state.movie) {
      return (
        <SearchResults movie={this.state.movie} />
      );
    }
    return null;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            OMDB Movie Search
          </Text>
        </View>
        <View>
          <TextInput
            autoFocus
            style={styles.input}
            placeholderTextColor="white"
            placeholder="Search"
            // The onSubmitEditing function is run when the text is submitted.
            // It will set this.state.movie equal to the value of the text input.
            onSubmitEditing={this.handleMovieSubmit}
          />
          {/* The Search term is passed into the SearchResults component as props. */}
          <SearchResults movie={this.state.movie} />
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
    marginTop: 20,
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
