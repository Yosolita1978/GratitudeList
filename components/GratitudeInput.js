import React, { useState }from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';

const GratitudeInput = props => {

    const [enteredInput, setInput] = useState('');

    const inputHandler = (enteredText) => {
        setInput(enteredText);
      };

    const addInputHandler = () => {
        props.onAddGratitude(enteredInput);
        setInput('');
    };

    return (
    <Modal visible={props.visible} animationType='slide'>    
    <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Things to be Grateful For" 
        style={styles.textContainer} 
        onChangeText={inputHandler}
        value={enteredInput}/>
     <View style={styles.buttonContainer}>
       <View style={styles.button}><Button  title='Cancel' color="#CD8A70" onPress={props.onCancel}/></View>
       <View style={styles.button}><Button title="Add" onPress={addInputHandler} color="#7084CD"/></View>
    </View>
     </View>
     </Modal>);
};

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      },
      textContainer:{
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 5, 
        marginBottom: 5,
        textAlign: 'center'
      }, 
      buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '60%'
    }, 
      button:{
          width: '40%',
          elevation: 10,
          borderRadius: 10
      } 
});

export default GratitudeInput;