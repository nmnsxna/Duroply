import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginFailed = ({ route, navigation }) => {
  const message = route.params?.message || 'Login failed.';

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{message}</Text>
      <Button title="Try Again" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default LoginFailed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
    textAlign: 'center'
  }
});
