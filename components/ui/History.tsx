import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function History() {
  return (
    <View style={styles.container}>
        <Text variant='titleLarge'>History</Text>
        <View>
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
  }
});

export default History