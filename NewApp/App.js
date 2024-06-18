
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import loginscreen from './loginscreen';
import homepagescreen from './homepagescreen';
export default function App() { 
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <loginscreen/>
      <homepagescreen/>
    </SafeAreaView>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F08E8',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
