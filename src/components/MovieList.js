import React from 'react';
import {
    FlatList,
    Text,
    View
  } from 'react-native';
import MovieListItem from './MovieListItem';
import movieData from '../resources/movies.json';

const MovieList = () => (
  <View>
    <FlatList
      data={movieData.results}
      keyExtractor={(item, index) => item.id}
      renderItem={({item}) =>
        <MovieListItem
         name={item.title}
        />
      }
    />
  </View>
);

export default MovieList;
