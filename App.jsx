// Import necessary modules
import React, { useState } from 'react';
import { NavigationContainer,DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text, useColorScheme, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RadioButtonRN from 'radio-buttons-react-native';

const styles = StyleSheet.create({
 
  TextInput: {
    borderColor: 'red',
    borderWidth: 2,
  },

  InputContainer: {
    width: '50%',
  },

  OutputContainer: {
    width: '50%',
    borderColor: 'red',
    borderWidth: 2,
  },

  radioButton:{
     borderColor:'white',
     borderWidth: 2,
     textAlign:'center',
     paddingTop:'7%',
     paddingBottom:'7%',
  },
});


function CutOnX() {
  const navigation = useNavigation();
  let [X,getX] = useState(0);
  let [Y,getY] = useState(0);
  let [Q,getQ] = useState(0);
  let [W,getW] = useState(0);
  let [E,getE] = useState(0);
  let [X1,getX1] = useState(0);
  let [Y1,getY1] = useState(0);
  let [Mx,getMx] = useState(0);
  let [My,getMy] = useState(0);
  return (
    <View>
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      <View style={styles.InputContainer}>
        <Text>velikost tiskoviny na x</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={newText => ( getX(newText))}
          keyboardType="numeric"></TextInput>
      </View>
      <View style={styles.InputContainer}>
        <Text>velikost tiskoviny na y</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={newText => (getY(newText))}
          keyboardType="numeric"></TextInput>
      </View>
      <View style={styles.InputContainer}>
        <Text>prvni rez vlevo</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={newText => (getW(newText))}
          keyboardType="numeric"></TextInput>
      </View>
      <View style={styles.InputContainer}>
        <Text>prvni rez nahore</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={newText => (getQ(newText))}
          keyboardType="numeric"></TextInput>
      </View>
      <View style={styles.InputContainer}>
        <Text>velikost archu na x</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={newText => (getX1(newText))}
          keyboardType="numeric"></TextInput>
      </View>
      <View style={styles.InputContainer}>
        <Text>velikost archu na y</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={newText => (getY1(newText))}
          keyboardType="numeric"></TextInput>
      </View>
      <View style={styles.InputContainer}>
        <Text>pocet rezu na x</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={newText => (getMx(newText))}
          keyboardType="numeric"></TextInput>
      </View>
      <View style={styles.InputContainer}>
        <Text>pocet rezu na y</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={newText => (getMy(newText))}
          keyboardType="numeric"></TextInput>
      </View>
      
      <View style={styles.InputContainer}>
        <Text>spadavka x2</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={newText => (getE(newText))}
          keyboardType="numeric"></TextInput>
      </View>
      <View style={styles.InputContainer}>
        <Text></Text>
      </View>
      <View style={{borderColor:'red', borderWidth:2,  width: '50%',display:'flex'}}>
      <View>
     {Mx != 1 ?<View>{Mx - 1 < 0 ? <Text></Text>:<Text>sirka vypocet = {X1 - W}</Text>}</View>:<Text>sirka vypocet = {X}</Text>}
     {Mx != 2 ?<View>{Mx - 2 < 0 ? <Text></Text>:<Text>sirka vypocet = {X1 - W - X}</Text>}</View>:<Text>sirka vypocet = {X}</Text>}
     {Mx != 3 ?<View>{Mx - 3 < 0 ? <Text></Text>:<Text>sirka vypocet = {X1 - W - X - E}</Text>}</View>:<Text>sirka vypocet = {X}</Text>}
     {Mx != 4 ?<View>{Mx - 4 < 0 ? <Text></Text>:<Text>sirka vypocet = {X1 - W - X - E - X}</Text>}</View>:<Text>sirka vypocet = {X}</Text>}
     {Mx != 5 ?<View>{Mx - 5 < 0 ? <Text></Text>:<Text>sirka vypocet = {X1 - W - X - E - X - E}</Text>}</View>:<Text>sirka vypocet = {X}</Text>}
     {Mx != 6 ?<View>{Mx - 6 < 0 ? <Text></Text>:<Text>sirka vypocet = {X1 - W - X - E - X - E - X}</Text>}</View>:<Text>sirka vypocet = {X}</Text>}
     {Mx != 7 ?<View>{Mx - 7 < 0 ? <Text></Text>:<Text>sirka vypocet = {X1 - W - X - E - X - E - X - E}</Text>}</View>:<Text>sirka vypocet = {X}</Text>}
     {Mx != 8 ?<View>{Mx - 8 < 0 ? <Text></Text>:<Text>sirka vypocet = {X1 - W - X - E - X - E - X - E - X}</Text>}</View>:<Text>sirka vypocet = {X}</Text>}
     {Mx != 9 ?<View>{Mx - 9 < 0 ? <Text></Text>:<Text>sirka vypocet = {X1 - W - X - E - X - E - X - E - X - E}</Text>}</View>:<Text>sirka vypocet = {X}</Text>}
     {Mx != 10 ?<View>{Mx - 10 < 0 ? <Text></Text>:<Text>sirka vypocet = {X1 - W - X - E - X - E - X - E - X - E - X}</Text>}</View>:<Text>sirka vypocet = {X}</Text>}
     {Mx != 11 ?<View>{Mx - 11 < 0 ? <Text></Text>:<Text>sirka vypocet = {X1 - W - X - E - X - E - X - E - X - E - X - E}</Text>}</View>:<Text>sirka vypocet = {X}</Text>}
     {Mx != 12 ?<View>{Mx - 12 < 0 ? <Text></Text>:<Text>sirka vypocet = {X1 - W - X - E - X - E - X - E - X - E - X - E - X}</Text>}</View>:<Text>sirka vypocet = {X}</Text>}
     {Mx != 13 ?<View>{Mx - 13 < 0 ? <Text></Text>:<Text>sirka vypocet = {X1 - W - X - E - X - E - X - E - X - E - X - E - X - E}</Text>}</View>:<Text>sirka vypocet = {X}</Text>}
     {Mx != 14 ?<View>{Mx - 14 < 0 ? <Text></Text>:<Text>sirka vypocet = {X1 - W - X - E - X - E - X - E - X - E - X - E - X - E - X}</Text>}</View>:<Text>sirka vypocet = {X}</Text>}
     {Mx != 15 ?<View>{Mx - 15 < 0 ? <Text></Text>:<Text>sirka vypocet = {X1 - W - X - E - X - E - X - E - X - E - X - E - X - E - X - E}</Text>}</View>:<Text>sirka vypocet = {X}</Text>}
     {Mx != 16 ?<View>{Mx - 16 < 0 ? <Text></Text>:<Text>sirka vypocet = {X1 - W - X - E - X - E - X - E - X - E - X - E - X - E - X - E - X}</Text>}</View>:<Text>sirka vypocet = {X}</Text>}
     {Mx != 17 ?<View>{Mx - 17 < 0 ? <Text></Text>:<Text>sirka vypocet = {X1 - W - X - E - X - E - X - E - X - E - X - E - X - E - X - E - X - E}</Text>}</View>:<Text>sirka vypocet = {X}</Text>}
   
       </View>
      </View>
      <View style={{ borderColor: 'red', borderWidth: 2, width: '50%',display:'flex'}}>
          
      {My != 1 ?<View>{My - 1 < 0 ? <Text></Text>:<Text>vyska vypocet = {Y1 - Q}</Text>}</View>:<Text>vyska vypocet = {Y}</Text>}
      {My != 2 ?<View>{My - 2 < 0 ? <Text></Text>:<Text>vyska vypocet = {Y1 - Q - Y}</Text>}</View>:<Text>vyska vypocet = {Y}</Text>}
      {My != 3 ?<View>{My - 3 < 0 ? <Text></Text>:<Text>vyska vypocet = {Y1 - Q - Y - E}</Text>}</View>:<Text>vyska vypocet = {Y}</Text>}
      {My != 4 ?<View>{My - 4 < 0 ? <Text></Text>:<Text>vyska vypocet = {Y1 - Q - Y - E - Y}</Text>}</View>:<Text>vyska vypocet = {Y}</Text>}
      {My != 5 ?<View>{My - 5 < 0 ? <Text></Text>:<Text>vyska vypocet = {Y1 - Q - Y - E - Y - E}</Text>}</View>:<Text>vyska vypocet = {Y}</Text>}
      {My != 6 ?<View>{My - 6 < 0 ? <Text></Text>:<Text>vyska vypocet = {Y1 - Q - Y - E - Y - E - Y}</Text>}</View>:<Text>vyska vypocet = {Y}</Text>}
      {My != 7 ?<View>{My - 7 < 0 ? <Text></Text>:<Text>vyska vypocet = {Y1 - Q - Y - E - Y - E - Y - E}</Text>}</View>:<Text>vyska vypocet = {Y}</Text>}
      {My != 8 ?<View>{My - 8 < 0 ? <Text></Text>:<Text>vyska vypocet = {Y1 - Q - Y - E - Y - E - Y - E - Y}</Text>}</View>:<Text>vyska vypocet = {Y}</Text>}
      {My != 9 ?<View>{My - 9 < 0 ? <Text></Text>:<Text>vyska vypocet = {Y1 - Q - Y - E - Y - E - Y - E - Y - E}</Text>}</View>:<Text>vyska vypocet = {Y}</Text>}
      {My != 10 ?<View>{My - 10 < 0 ? <Text></Text>:<Text>vyska vypocet = {Y1 - Q - Y - E - Y - E - Y - E - Y - E - Y}</Text>}</View>:<Text>vyska vypocet = {Y}</Text>}
      {My != 11 ?<View>{My - 11 < 0 ? <Text></Text>:<Text>vyska vypocet = {Y1 - Q - Y - E - Y - E - Y - E - Y - E - Y - E}</Text>}</View>:<Text>vyska vypocet = {Y}</Text>}
      {My != 12 ?<View>{My - 12 < 0 ? <Text></Text>:<Text>vyska vypocet = {Y1 - Q - Y - E - Y - E - Y - E - Y - E - Y - E - Y}</Text>}</View>:<Text>vyska vypocet = {Y}</Text>}
      {My != 13 ?<View>{My - 13 < 0 ? <Text></Text>:<Text>vyska vypocet = {Y1 - Q - Y - E - Y - E - Y - E - Y - E - Y - E - Y - E}</Text>}</View>:<Text>vyska vypocet = {Y}</Text>}
      {My != 14 ?<View>{My - 14 < 0 ? <Text></Text>:<Text>vyska vypocet = {Y1 - Q - Y - E - Y - E - Y - E - Y - E - Y - E - Y - E - Y}</Text>}</View>:<Text>vyska vypocet = {Y}</Text>}
      {My != 15 ?<View>{My - 15 < 0 ? <Text></Text>:<Text>vyska vypocet = {Y1 - Q - Y - E - Y - E - Y - E - Y - E - Y - E - Y - E - Y - E}</Text>}</View>:<Text>vyska vypocet = {Y}</Text>}
      {My != 16 ?<View>{My - 16 < 0 ? <Text></Text>:<Text>vyska vypocet = {Y1 - Q - Y - E - Y - E - Y - E - Y - E - Y - E - Y - E - Y - E - Y}</Text>}</View>:<Text>vyska vypocet = {Y}</Text>}
      {My != 17 ?<View>{My - 17 < 0 ? <Text></Text>:<Text>vyska vypocet = {Y1 - Q - Y - E - Y - E - Y - E - Y - E - Y - E - Y - E - Y - E - Y - E}</Text>}</View>:<Text>vyska vypocet = {Y}</Text>}
      </View>
      </View>
     </View>
  );
}


// Create a Stack Navigator
const Stack = createStackNavigator();

// Main app component
function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="CutOnX" component={CutOnX} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
