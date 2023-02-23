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
      <Button
        title="Go to App screen"
        onPress={() => navigation.navigate('AppState')}
      />
      <Button
        title="Go to App Dev Setting"
        onPress={() => navigation.navigate('DevSetting')}
      />
      <Button
        title="Go to App Dimentions"
        onPress={() => navigation.navigate('Dimentions')}
      />
      <Button
        title="Go to Easing"
        onPress={() => navigation.navigate('Easing')}
      />
      <Button
        title="Go to InteractionManager"
        onPress={() => navigation.navigate('InteractionManager')}
      />
      <Button
        title="Go to Keyboard"
        onPress={() => navigation.navigate('KeyBoard')}
      />
      <Button
        title="Go to LayoutAnimation"
        onPress={() => navigation.navigate('LayoutAnimation')}
      />
      <Button
        title="Go to Pan Responder "
        onPress={() => navigation.navigate('PanResponder')}
      />
    </View>
  );
}

export default HomeScreen;
