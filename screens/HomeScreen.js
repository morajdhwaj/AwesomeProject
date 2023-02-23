import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Button, ScrollView, StyleSheet, StatusBar} from 'react-native';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView style={styles.scrollView}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Videosssss "
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
      <Button
        title="Go to Pixel ratio "
        onPress={() => navigation.navigate('PixelRatio')}
      />
      <Button
        title="Go to plateForm "
        onPress={() => navigation.navigate('Plateform')}
      />
      <Button
        title="Go to plateFormColor "
        onPress={() => navigation.navigate('PlateformColor')}
      />
      <Button
        title="Go to Share "
        onPress={() => navigation.navigate('Share')}
      />
      <Button
        title="Go to StyleSheet "
        onPress={() => navigation.navigate('StyleSheet')}
      />
      <Button
        title="Go to TransForm "
        onPress={() => navigation.navigate('TransForm')}
      />
      <Button
        title="Go to Vibration "
        onPress={() => navigation.navigate('Vibration')}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default HomeScreen;
