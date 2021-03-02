import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredInput, setInput] = useState('');
  const [gratitudeList, setGratitudeItem] = useState([]);

  const inputHandler = (enteredText) => {
    setInput(enteredText);
  };

  const addInputHandler = () => {
    //console.log(enteredInput);
    setGratitudeItem(currentItem => [...gratitudeList, enteredInput]);
  };

  return (
    <View style={styles.screenLayout} >
     <View style={styles.inputContainer}>
       <TextInput 
       placeholder="Express gratitude for" 
       style={styles.textContainer} 
       onChangeText={inputHandler}
       value={enteredInput}/>
      <Button title="Add" onPress={addInputHandler}></Button>
    </View>

     <View>
      {gratitudeList.map((item, index) => <Text key={item}>{item}</Text>)}
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenLayout: {
    padding: 50
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },
  textContainer:{
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5
  }
});
