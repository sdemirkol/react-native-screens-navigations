import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetNumber from "./screens/GetNumber"

export default function App() {
  let screen=<GetNumber />
  return (
    <View style={styles.container}>
      {screen}
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
