import React from 'react';
import {Alert, Button, DevSettings, View} from 'react-native';

const DevSettingScreen = () => {
  DevSettings.addMenuItem('Show Secret Dev Screen', () => {
    Alert.alert('Showing secret dev screen!');
  });

  return (
    <View>
      <Button title="Reload" onPress={() => DevSettings.reload()} />
    </View>
  );
};

export default DevSettingScreen;
