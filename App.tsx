// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Navigator from './Routes/LoginStack'
import Register from './components/Register';
import LoginStack from './Routes/LoginStack';
import BottomTab from './components/BottomTab';

// const Stack = createStackNavigator();
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>

    </View>
  );
}

// const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
    {/* //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={Login} />
    //   </Stack.Navigator> */}
    <LoginStack></LoginStack>
    {/* <BottomTab></BottomTab> */}
     </NavigationContainer>
    
    // <Register></Register>
    // <DropdownComponent></DropdownComponent>
  );
}

export default App;
