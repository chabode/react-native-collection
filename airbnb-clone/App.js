import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import explore from './screens/Explore'
import inbox from './screens/Inbox'
import saved from './screens/Saved'
import trips from './screens/Trips'
import profile from './screens/Profile'

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "red",
          inactiveTintColor: "grey",
          style: styles.tabOption
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={explore} 
          options={{
            tabBarIcon: ({color, size}) => <Icon name="home" color={color} size={size} />,
          }}/>
        <Tab.Screen 
          name="Inbox" 
          component={inbox} 
          options={{
            tabBarIcon: ({color, size}) => <Icon name="email" color={color} size={size} />,
          }}/>
        <Tab.Screen 
          name="Saved" 
          component={saved} 
          options={{
            tabBarIcon: ({color, size}) => <Icon name="cards-heart" color={color} size={size} />,
          }}/>
        <Tab.Screen 
          name="Trips" 
          component={trips} 
          options={{
            tabBarIcon: ({color, size}) => <Icon name="airplane" color={color} size={size} />,
          }}/>
        <Tab.Screen 
          name="Profile" 
          component={profile} 
          options={{
            tabBarIcon: ({color, size}) => <Icon name="account-box" color={color} size={size} />,
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabOption: {
    elevation: 5
  }
});
