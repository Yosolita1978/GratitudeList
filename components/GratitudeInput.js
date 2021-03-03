import React, { useState }from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

const GratitudeInput = props => {

    const [enteredInput, setInput] = useState('');

    const inputHandler = (enteredText) => {
        setInput(enteredText);
      };

    return (
    <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Express gratitude for" 
        style={styles.textContainer} 
        onChangeText={inputHandler}
        value={enteredInput}/>
       <Button title="Add" onPress={props.onAddGratitude.bind(this, enteredInput)}></Button>
     </View>);
};

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      textContainer:{
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 5
      } 
});

export default GratitudeInput;