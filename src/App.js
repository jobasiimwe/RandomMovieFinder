
import React from 'react';

import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import MovieList from './components/MovieList';

const App = StackNavigator({
    Home: {screen: Home},
    MovieList: {screen: MovieList},
});

export default App;
