import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, View } from 'react-native';

const MovieListItem = ({  title, posterPath, voteAverage }) => (
  <View style={styles.listItemContainer}>
     <View style={styles.itemImageView}>
       <Image source={{uri: `https://image.tmdb.org/t/p/w500${posterPath}`}} style={styles.itemImage}/>
     </View>
     <View style={styles.detailsView}>
       <Text>{title}</Text>
       <Text>{voteAverage} / 10</Text>
     </View>
 </View>
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

MovieListItem.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
};

export default MovieListItem;
