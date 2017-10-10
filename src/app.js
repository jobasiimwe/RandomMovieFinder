
import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import movieImage from './resources/movieBoardImg.png';
import Header from './components/Header';

const App = () => (
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
    </View>
);

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
  }
});
export default App;
