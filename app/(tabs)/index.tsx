/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home screen</Text>
        </View>
    </View>
    );
  }

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
   }
  },
);
