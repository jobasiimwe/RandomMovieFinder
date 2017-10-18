import React from 'react';
import PropTypes from 'prop-types';
import { 
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
 } from 'react-native';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        inputValue: '',
    };

    onChangeText = (inputValue) => {
        this.setState({inputValue});
    };

    render() {
        return (
            <View style={styles.searchBox}>
                <Text>{this.props.title}</Text>
                <TextInput 
                    style={ styles.searchBar }
                    onChangeText={this.onChangeText}
                />
                <TouchableOpacity onPress={() => 
                    this.props.onSearchPressed(this.state.inputValue)}
                >
                    <View style={styles.button}>
                        <Text> Search </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    searchBox: {
        width: '70%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        flex: 1,
    },
    button: {
        width: '30%',
        borderWidth: 1,
        borderRadius: 3,
        padding: 5,
        margin: 5,
    },
    searchBar: {
        width: '100%',
        height: 40,
        padding: 10,
        borderRadius: 2,
        borderColor: 'gray',
        borderWidth: 1,
    },
};


SearchBox.propTypes = {
    title: PropTypes.string.isRequired,
    onSearchPressed: PropTypes.func.isRequired,
};
  
export default SearchBox;