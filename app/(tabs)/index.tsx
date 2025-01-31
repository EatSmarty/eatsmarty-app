/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import AppBar from '@/components/AppBar';
import { StyleSheet, Text, View } from 'react-native';
import Banner from '@/components/ui/Banner';

export default function HomeScreen() {
  return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Banner />
        </View>
    </View>
    );
  }

const styles = StyleSheet.create({
  safeArea: {
    // flex: 1, 
    // justifyContent: 'center', 
    // alignItems: 'center',
   }
  },
);
