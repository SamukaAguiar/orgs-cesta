import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cesta from './src/forms/Cesta';
import MyComponent from './src/forms/MyComponent';


export default function App() {
  return (
    <View style={styles.container}>
      <Cesta/>
      <MyComponent/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
