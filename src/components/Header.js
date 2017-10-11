import React from 'react';
import {
    Text,
    View
  } from 'react-native';

const Header = (props) => (
    <View style={ styles.header }>
        {props.children}
    </View>
);

const styles = ({
    header: {
        alignItems: 'center',
        paddingTop: 15,
        height: 60,
        // backgroundColor: '#BF0',
        // ios
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 1
      }
});

export default Header;
