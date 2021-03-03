import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GratitudeItem = props => {

    return (<View style={styles.listItem}><Text >{props.title}</Text></View>);
};

const styles = StyleSheet.create({
    listItem: {
        width: '90%',
        borderColor: '#C4B6C0',
        borderWidth: 1,
        backgroundColor: '#EECEE5',
        padding: 10,
        marginVertical:5
      }
});

export default GratitudeItem;