import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GratitudeItem from './components/GratitudeItem';
import GratitudeInput from './components/GratitudeInput';

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
    <View style={styles.screenLayout} >
      <Button title="Express gratitude for" onPress={() => setAddMode(true)} color="#70CD8A"/>
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

    
    </View>
  );
}

const styles = StyleSheet.create({
  screenLayout: {
    padding: 80
  }

  });
