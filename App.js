import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import GetNumbers from "./screens/GetNumbers"
import FindResult from './screens/FindResult';

export default function App() {
  const [result, setResult] = useState();

  function findResultAdding(addingResult) {
    setResult(addingResult);
  }
  function resetResult(){
    setResult(undefined);
  }
  let screen = <GetNumbers resultAdding={findResultAdding} />

  if (result) {
    //Alert.alert('Toplam Sonucu',result.toString(),[{text:'Tamam', style:'destructive'}]);
    screen = <FindResult result={result} againButtonPress={resetResult}/>
  }
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
