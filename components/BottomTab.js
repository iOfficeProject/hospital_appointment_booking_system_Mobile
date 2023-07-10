import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Homeicon from '../Assets/icons/homeicon.png'
import Profileicon from '../Assets/icons/profileicon.png'
import{Button, Image, StyleSheet, Text, TextInput, View} from "react-native"



const Tab = createBottomTabNavigator();



const BottomTab =()=>{
  return(<Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
        tabBarShowLabel:false,
      tabBarActiveTintColor: '#8DC540',
      tabBarStyle:{height:60,bottom:20,borderRadius:50,marginHorizontal:25}
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Image source={Homeicon} style={{width:35,height:35}}></Image>
        ),
      }}
    />
    
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
            <Image source={Profileicon} style={{width:35,height:35 }}></Image>

        ),
      }}
    />
  </Tab.Navigator>)
}

export default BottomTab;