import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { IMAGE_PREFIX } from '../fakeMoviesApi';

class MovieDetail extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.movie.title
    });

    render () {
        const { movie } = this.props.navigation.state.params;

        return (
            <View style={styles.itemImageView}>
                <Image 
                    source={{uri: `${IMAGE_PREFIX}${movie.poster_path}`}}
                    style={styles.itemImage}/>
                <Text>{movie.title}</Text>
            </View>
        )
    }
};


const styles=StyleSheet.create({
    itemImageView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    itemImage: {
      width: 200,
      height: 250,
      resizeMode: 'contain',
    }
});
  

export default MovieDetail;