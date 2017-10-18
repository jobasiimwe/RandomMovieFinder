import React from 'react';
import PropTypes from 'prop-types';
import {
    FlatList,
    Text,
    View
  } from 'react-native';
import MovieListItem from './MovieListItem';
import movieData from '../resources/movies.json';

const searchMovies = (movies, searchTerm) => {
  return movies.filter((movie)=>{
    return movie.title.toLowerCase()
      .contains(searchTerm.toLowerCase());
  });
};

const MovieList = (props) => (
  <View>
    <Text>{props.searchKeyWord}</Text>
    <FlatList
      data={searchMovies(movieData.results, props.searchKeyWord)}
      keyExtractor={(item, index) => item.id}
      renderItem={({item}) =>
        <MovieListItem
          title={item.title}
          posterPath={item.poster_path}
          voteAverage={item.vote_average}
        />
      }
    />
  </View>
);


MovieList.propTypes = {
  searchKeyWord: PropTypes.string.isRequired,
};

export default MovieList;
