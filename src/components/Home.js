
import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import movieImage from '../resources/movieBoardImg.png';
import Header from './Header';
import SearchBox from './SearchBox';
import { search } from '../fakeMoviesApi';


class Home extends React.Component{
  
  static navigationOptions = {
    title: 'Random Movie Finder'
  };

  constructor(props) {
    super(props);
    this.onSearchPressed = this.onSearchPressed.bind(this);
  }

  onSearchPressed (searchKeyword) {
    const movies = search(searchKeyword);
    this.props.navigation.navigate('MovieList', {
      searchKeyword, movies
    });
  } 
  
  render() {
    return (
      <View style={styles.home}>
        <View style={ styles.content }>
            <Text>
                What movie should we watch tonight?
            </Text>
            <Image
            style={ styles.movieImage }
            source={movieImage}
            />
        </View>

        <View  style={ styles.content }>
          <SearchBox 
            title='Search Movie' 
            onSearchPressed={this.onSearchPressed}
          />
        </View>
      </View>
    );
  }
};

const styles = ({
  home: {
    flex:1
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  movieImage: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain'
  },
  movieListContainer: {
    flex: 1
  }
});

export default Home;
