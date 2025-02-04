import React from 'react';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{ title: 'Home' }} />
      <Tabs.Screen 
        name="scan" 
        options={{ title: 'Scan' }} />
      <Tabs.Screen 
        name="(additives)"
        options={{ title: 'Additive Details', headerShown: false }} />
    </Tabs>
  );
}
