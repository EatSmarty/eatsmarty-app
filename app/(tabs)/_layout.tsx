import React from 'react';
import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Eatsmarty',
          tabBarActiveTintColor: "#18DAA3",
          tabBarIcon: () => <Icon name="home" size={20} color="#18DAA3" />
         }} />
      <Tabs.Screen 
        name="scan" 
        options={{ 
            title: 'Scan',
            tabBarActiveTintColor: "#18DAA3",
            tabBarIcon: () => <Icon name="qrcode" size={20} color="#18DAA3" />
          }} />
      <Tabs.Screen 
        name="(additives)"
        options={{ 
            title: 'Additive Details',
            headerShown: false,
            tabBarActiveTintColor: "#18DAA3",
            tabBarIcon: () => <Icon name="bars" size={20} color="#18DAA3" />
          }} />
    </Tabs>
  );
}
