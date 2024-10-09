/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
const App = () => {
  const [age, setAge] = useState('20');
  const [name, setName] = useState('wahab');
  const [txtinpname, setTxtinpname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const usersArray = [
    {name: 'john', id: 1},
    {name: 'bruce', id: 2},
    {name: 'mike', id: 3},
  ];
  const resetForm = () => {
    setDisplay(false);
    setEmail('');
    setTxtinpname('');
    setPassword('');
  };
  function testname() {
    setName('Syed wahabuddin');
  }
  const fruit = () => {
    console.warn('function fruit is called');
  };
  const helloname = val => {
    console.warn(val);
  };
  return (
    <View>
      {/* Button and onPress */}
      <Text style={{fontSize: 20}}> Button and Onpress event </Text>
      <Button title="on Press" onPress={fruit} color={'red'} />
      <Button
        title="on Press 2"
        onPress={() => helloname('hello wahab')}
        color={'green'}
      />
      {/* states  */}
      <Text>{name}</Text>
      <Button title="Update Name" onPress={testname} />
      {/* props  */}
      <Button
        title="Update Props"
        onPress={() => setAge('30')}
        color={'green'}
      />
      <User age={age} name={name} />
      {/* {form in react native } */}
      <Text style={{fontSize: 25}}>Handle Text Input</Text>
      <Text style={{fontSize: 25}}>your name is : {txtinpname}</Text>
      <TextInput
        placeholder="Enter your name"
        style={styles.TextInput}
        value={txtinpname}
        onChangeText={text => setTxtinpname(text)}
      />
      <Button title="Clear input value" onPress={() => setTxtinpname('')} />
      <TextInput
        placeholder="Enter your Email Address"
        style={styles.TextInput}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Enter your Password"
        secureTextEntry={true}
        style={styles.TextInput}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Button title="Show Details" onPress={() => setDisplay(true)} />
      <Button title="Clear Details" color={'green'} onPress={resetForm} />
      {display ? (
        <>
          <Text style={{fontSize: 25}}>your name is : {txtinpname}</Text>
          <Text style={{fontSize: 25}}>your emaail is : {email}</Text>
          <Text style={{fontSize: 25}}>your password is : {password}</Text>
        </>
      ) : null}
      {/* {list with Flatlist} */}
      <Text style={{fontSize: 25}}>list with flatlists</Text>
      <FlatList
        data={usersArray}
        renderItem={({item}) => <Text>{item.name}</Text>}
        // {used for scrolling etc }
        keyExtractor={item => item.id}
      />
      <Text style={{fontSize: 25}}>list with map function</Text>
      <ScrollView>
        {usersArray.map(item => (
          <Text>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};
const User = props => {
  return (
    <View>
      <Text style={{fontSize: 20}}>the users age is {props.age}</Text>
      <Text style={{fontSize: 20}}>the users name is {props.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  TextInput: {
    fontSize: 20,
    color: 'red',
    borderWidth: 2,
    borderColor: 'green',
    margin: 10,
  },
});
export default App;
