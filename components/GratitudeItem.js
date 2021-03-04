import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GratitudeItem = props => {

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItem} on>
        <Text >{props.title}</Text>
        </View>
        </TouchableOpacity>
        );
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