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
import AppStateScreen from './screens/AppStateScreen';
import DimentionsScreen from './screens/DimenstionScreen';
import EasingScreen from './screens/EasingScreen';
import InteractionManagerScreen from './screens/InteractionManagerScreen';
import DevSettingScreen from './screens/DevSettingScreen';
import KeyBoardScreen from './screens/KeyBoardScreen';
import LayoutAnimationScreen from './screens/LayoutAnimationScreen';
import PanResponderScreen from './screens/PanResponderScreen';

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
          <Stack.Screen name="AppState" component={AppStateScreen} />
          <Stack.Screen name="DevSetting" component={DevSettingScreen} />
          <Stack.Screen name="Dimentions" component={DimentionsScreen} />
          <Stack.Screen name="Easing" component={EasingScreen} />
          <Stack.Screen name="KeyBoard" component={KeyBoardScreen} />
          <Stack.Screen name="PanResponder" component={PanResponderScreen} />
          <Stack.Screen
            name="LayoutAnimation"
            component={LayoutAnimationScreen}
          />
          <Stack.Screen
            name="InteractionManager"
            component={InteractionManagerScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
