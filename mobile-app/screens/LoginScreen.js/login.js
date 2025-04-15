import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.1.7:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        });

      const data = await response.json();

      // if (response.ok) {
      //   navigation.navigate('Home', { user: data.user });

      if (data.message === 'Login successful!') {
          navigation.navigate('Menu');
        }
      } else {
        navigation.navigate('LoginFailed', { message: data.message });
      }
    } catch (error) {
      console.error('Login error:', error);
      navigation.navigate('LoginFailed', { message: 'Something went wrong' });
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.leftPane}>
        <Image
          source={require('./assets/image.png')} // 👈 Use the uploaded image in your project folder
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.rightPane}>
        <Text style={styles.title}>Login to DURO</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureText}
          />
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <Ionicons name={secureText ? 'eye-off' : 'eye'} size={22} color="#666" />
          </TouchableOpacity>
        </View>

        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LoginScreen;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: width > 600 ? 'row' : 'column', // Responsive: horizontal on wide, vertical on narrow
    backgroundColor: '#fff'
  },
  leftPane: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  rightPane: {
    flex: 1,
    padding: 24,
    justifyContent: 'center'
  },
  logo: {
    width: '80%',
    height: 100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center'
  },
  label: {
    marginBottom: 6,
    fontSize: 16,
    fontWeight: '600'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 16,
    borderRadius: 4
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 4,
    marginBottom: 16
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 8
  }
});
