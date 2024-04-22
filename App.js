import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Login from './components/Login'
import Cart from './components/Cart'
import Home from './components/Home'
import ShopSmartApp from './components/Main';
import SubCategory from './components/SubCategory';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// the main branch of the code

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sub-Category" component={ShopSmartApp} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
  </NavigationContainer>

  );
}

