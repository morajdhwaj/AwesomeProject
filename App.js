// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TestScreen from './screens/TestScreen';
import DocumentScreen from './screens/DocumentScreen';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import VideoScreen from './screens/VideoScreen';
import TabNavigator from './navigators/TabNavigator';

const Stack = createNativeStackNavigator();

export const client = new ApolloClient({
  uri: 'https://course-cube-server.onrender.com/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            options={{headerShown: false}}
            name="Tab Navigator"
            component={TabNavigator}
          />
          <Stack.Screen name="Videos" component={VideoScreen} />
          <Stack.Screen name="Tests" component={TestScreen} />
          <Stack.Screen name="Documents" component={DocumentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
