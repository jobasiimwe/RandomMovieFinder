import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IMAGE_PREFIX } from '../fakeMoviesApi';

const MovieListItem = ({  movie, callback }) => (
  <TouchableOpacity onPress={() => 
    {callback(movie);}}>
    <View style={styles.listItemContainer}>
      <View style={styles.itemImageView}>
        <Image 
          source={{uri: `${IMAGE_PREFIX}${movie.poster_path}`}}
          style={styles.itemImage}/>
      </View>
      <View style={styles.detailsView}>
        <Text>{movie.title}</Text>
        <Text>{movie.voteAverage} / 10</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles=StyleSheet.create({
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
  itemImageView: {
    flex: 1,
  },
  itemImage: {
    width: 30,
    height: 45,
    resizeMode: 'contain',
  },
  detailsView: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  }
});

export default MovieListItem;
