import React from 'react';
import { Text, FlatList, View } from 'react-native';
import MovieListItem from './MovieListItem';
import moviesData from '../resources/movies.json';

const renderSearchWord = (searchKeyword) => {
  if (searchKeyword !== '') {
    return (
      <Text style={styles.currentSearch}>
        {`Searches for '${searchKeyword}'`}
      </Text>
  )}
}

class MovieList extends React.Component {

  movieSelected = (movie) => {
    this.props.navigation.navigate('MovieDetail', { movie });
  }

  render () {
    const { searchKeyword, movies } = this.props.navigation.state.params;

    return (
      <View style={styles.searchResults}>
        <Text style={styles.currentSearch}>
            {renderSearchWord(searchKeyword)}
        </Text>
        <FlatList
          style={{flex:1}}
          data={movies}
          keyExtractor={(item, index) => item.id }
          renderItem={({item}) => <MovieListItem
            movie={item}
            callback={this.movieSelected}
          />}
        />
      </View>
    );
  }
}

const styles = {
  searchResults:{
    flex:1,
  },
  currentSearch: {
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    fontWeight: 'bold',
  }
}

export default MovieList;