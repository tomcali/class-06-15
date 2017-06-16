import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class SearchResults extends Component {

  // We are setting the initial state of this.state.movie to ''.
  constructor(props) {
    super(props);
    this.state = {
      movie: ''
    };
  }

  // When the component loads it will run the fetchData function.
  componentDidMount() {
    this.fetchData();
  }

  // The fetchData function makes an AJAX call to the OMDB API.
  fetchData(movieinput) {
    // For now we are just making the same API call every time.
    // Note: by default iOS will block any requests not encrypted using SSL (non https urls)
    // https://facebook.github.io/react-native/docs/network.html
    fetch('https://www.omdbapi.com/?t=Frozen&y=&plot=short&apikey=40e9cece')
    .then(response => response.json())
    .then((responseData) => {
      // After the data is recieved, we set this.state.movie to the result of the API
      // call.
      this.setState({ movie: responseData });
    })
    .catch(err => console.log(err));
  }

  render() {

    // We reference this.state.movie to display results from the API call.
    return (
      <View style={styles.item}>
        <Text style={styles.txt}>
          <Text style={{ fontWeight: 'bold' }}>
          Title:
          </Text>
            {this.state.movie.Title}
          {"\n"}
        </Text>
        <Text style={styles.txt}>
          <Text style={{ fontWeight: 'bold' }}>
          Year:
          </Text>
            {this.state.movie.Year}
          {"\n"}
        </Text>
        <Text style={styles.txt}>
          <Text style={{ fontWeight: 'bold' }}>
          Plot:
          </Text>
            {this.state.movie.Plot}
          {"\n"}
        </Text>
        <Text style={styles.txt}>
          <Text style={{ fontWeight: 'bold' }}>
          Actors:
          </Text>
            {this.state.movie.Actors}
          {"\n"}
        </Text>
        <Text style={styles.txt}>
          <Text style={{ fontWeight: 'bold' }}>
          Metascore:
          </Text>
            {this.state.movie.Metascore}
          {"\n"}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 16,
    color: 'white'
  },
  item: {
    margin: 10,
    backgroundColor: 'rgba(76,217,175,1)',
    padding: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }
});

export default SearchResults;
