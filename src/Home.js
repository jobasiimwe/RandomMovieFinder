
import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import movieImage from './resources/movieBoardImg.png';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';

class Home extends React.Component{
  
  constructor(props) {
    super(props);
    this.onSearchPressed = this.onSearchPressed.bind(this);
  }

  state = {
    searchKeyWord: '',
  };

  onSearchPressed (searchKeyWord) {
    this.setState({searchKeyWord});
  } 
  
  render() {
    return (
      <View style={styles.home}>
        <Header>
            <Text>some text</Text>
            <Image style={styles.movieImage} source={movieImage} />
        </Header>
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

        <View style={ styles.movieListContainer }>
          <MovieList searchKeyWord={this.state.searchKeyWord}/>
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
