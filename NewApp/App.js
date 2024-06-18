
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import loginscreen from './loginscreen';
import homepagescreen from './homepagescreen';
const Stack = createStackNavigator();
export default function App() { 
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <loginscreen/>
      <homepagescreen/>
    </SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator initialRcuteName="Login">
        <Stack.Screen name= "Login" component={loginscreen} options={{headerShown:false}}/>
        <Stack.Screen name= "Homepage" component={homepagescreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ScrollView>
  );
}
