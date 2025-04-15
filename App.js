import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen'; // move your current login code into this
import MenuScreen from './screens/MenuScreen';
import LoginFailed from './screens/LoginFailed';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="LoginFailed" component={LoginFailed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
