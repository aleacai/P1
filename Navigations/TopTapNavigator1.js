import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Contacto1Screen from '../Screens/Contacto1Screen';
import Contacto2Screen from '../Screens/Contacto2Screen';
import InicioScreen from '../Screens/InicioScreen';

import Constants from 'expo-constants';

const Tab = createMaterialTopTabNavigator();

export default function TopTapNavigator1() {
  return (
    <Tab.Navigator
      initialRouteName="Contacto1"
      tabBarOptions={{
        activeTintColor: '#5391f5',
        inactiveTintColor: '#060606',
        showIcon: true,
        showLabel: true,
        labelStyle: {
          fontSize: 11,
        },
        style: {
          paddingTop: Constants.statusBarHeight,
          backgroundColor: '#f3f3f1',
        },
      }}>
      <Tab.Screen
        name="Contacto1"
        component={Contacto1Screen}
        options={{
          tabBarLabel: 'Contacto 1',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'person-outline'} size={20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Contacto2"
        component={Contacto2Screen}
        options={{
          tabBarLabel: 'Contacto 2',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'person-outline'} size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
