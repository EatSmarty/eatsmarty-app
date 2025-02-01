import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function History() {
  return (
    <View style={styles.container}>
        <Text variant='titleLarge'>History</Text>
        <View style={styles.iconContainer}>
            {/* <MaterialCommunityIcons name='history' size={50} color="#333" /> */}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
    // paddingHorizontal: 10
  },
  iconContainer: {
    width: 100, 
    height: 100,
    display: 'flex',
    borderRadius: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, 
  }
});

export default History