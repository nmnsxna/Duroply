import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';
 
const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://191.191.5.136:3000/api/login', {
        email,
        password
      });
 
      alert('Login successful');
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert('Login failed');
    }
  };
 
  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} style={styles.input} />
      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 20
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 8
  }
});
 
export default App;