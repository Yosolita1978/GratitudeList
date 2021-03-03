import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GratitudeItem from './components/GratitudeItem';
import GratitudeInput from './components/GratitudeInput';

export default function App() {
  
  const [gratitudeList, setGratitudeItem] = useState([]);

  

  const addInputHandler = itemTittle => {
    //console.log(itemTitle);
    setGratitudeItem(currentItem => [...gratitudeList, { key: Math.random().toString(), value: itemTittle }]);
  };

  return (
    <View style={styles.screenLayout} >
      <GratitudeInput onAddGratitude={addInputHandler}/>
  
    <View>
    <FlatList 
    keyExtractor={(item) => item.key } 
    data={gratitudeList} 
    renderItem={itemList => (<GratitudeItem  title={itemList.item.value}/>)}
    />
    </View>

    
    </View>
  );
}

const styles = StyleSheet.create({
  screenLayout: {
    padding: 50
  }

  });
