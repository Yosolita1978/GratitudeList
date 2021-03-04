import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {

    return (
        <View style={styles.header}>
            <Text style={styles.textHeader}>{"Gratitude List"}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#eee',
        
      },
      textHeader:{
        color: '#fff',
        fontSize: 26,
        textAlign: 'center',
        fontWeight: '200' 
      }
});

export default Header;