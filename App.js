import React from 'react';
import {ActivityIndicator, Alert, Button, StyleSheet, View} from 'react-native';

const App = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
    <Button
      title="Press me"
      color="#f194ff"
      onPress={() => Alert.alert('Button with adjusted color pressed')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    // flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default App;
