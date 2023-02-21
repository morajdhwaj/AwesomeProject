import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import VideoScreen from '../screens/VideoScreen';
import TestScreen from '../screens/TestScreen';
import DocumentScreen from '../screens/DocumentScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Tab Home" component={HomeScreen} />
        <Tab.Screen name="Tab Videos" component={VideoScreen} />
        <Tab.Screen name="Tab Tests" component={TestScreen} />
        <Tab.Screen name="Tab Documents" component={DocumentScreen} />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
