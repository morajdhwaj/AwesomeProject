import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Videos "
        onPress={() => navigation.navigate('Videos')}
      />
      <Button
        title="Go to Tests"
        onPress={() => navigation.navigate('Tests')}
      />
      <Button
        title="Go to Documents"
        onPress={() => navigation.navigate('Documents')}
      />
      <Button
        title="Go to TabNavigator"
        onPress={() => navigation.navigate('Tab Navigator')}
      />
    </View>
  );
}

export default HomeScreen;
