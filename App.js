import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

// You can import from local files
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';



const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
