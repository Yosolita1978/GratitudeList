import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GratitudeItem from './components/GratitudeItem';
import GratitudeInput from './components/GratitudeInput';
import Header from './components/header';

export default function App() {
  
  const [gratitudeList, setGratitudeItem] = useState([]);
  const [isAddMode, setAddMode] = useState(false);

  const addInputHandler = itemTittle => {
    //console.log(itemTitle);
    setGratitudeItem(gratitudeList => [...gratitudeList, { key: Math.random().toString(), value: itemTittle }]);
    setAddMode(false);
  };

  const removeInputHandler = itemKey => {
    setGratitudeItem( gratitudeList => {
      return gratitudeList.filter((item) => item.key !== itemKey);
    });
  };

  const cancelModalHandler = () =>{
    setAddMode(false);
  };


  return (
    <LinearGradient style={styles.screenLayout} colors={['#EDCCE4', '#DB99C8', '#FFFFFF']} >
      <StatusBar  barStyle={'light-content'}/>
      <Header/>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => setAddMode(true)}>
      <Text style={styles.buttonText}>Express gratitude</Text>
      </TouchableOpacity>
      <GratitudeInput visible={isAddMode} onAddGratitude={addInputHandler} onCancel={cancelModalHandler}/>
    <View>
    <FlatList 
    keyExtractor={(item) => item.key } 
    data={gratitudeList} 
    renderItem={itemList => (
    <GratitudeItem 
      id={itemList.item.key}  
      title={itemList.item.value} 
      onDelete={removeInputHandler}
    />)}
    />
    </View>    
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screenLayout: {
    padding: 50
  }, 
    buttonContainer:{
    elevation: 8,
    backgroundColor: "#7084CD",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12, 
    marginTop: 20
  }, 
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  }


  });
