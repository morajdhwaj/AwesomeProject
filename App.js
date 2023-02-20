// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import VideosScreen from './screens/VideosScreen';
import TestScreen from './screens/TestScreen';
import DocumentScreen from './screens/DocumentScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Videos" component={VideosScreen} />
        <Stack.Screen name="Tests" component={TestScreen} />
        <Stack.Screen name="Documents" component={DocumentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
