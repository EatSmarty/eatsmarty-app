/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, View, Text } from 'react-native';
import AdditivesList from '@/components/AdditivesList'

export default function AdditivesScreen() {

return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <AdditivesList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',
    paddingHorizontal: 15
  }
},
);