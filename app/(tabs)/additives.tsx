/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Image, StyleSheet, Platform } from 'react-native';

import AppBar from '@/components/AppBar'
export default function HomeScreen() {
  const MyComponent = () => {
    const _goBack = () => console.log('Went back');
  
    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');
  }
  return (
      <AppBar content="Additives"/>
    );
  }

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});