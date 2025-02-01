import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const Banner = () => (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.text}>Hello 👋</Text>
          <Text variant="bodyMedium" style={styles.text}>Scan Like a Detective, Eat Like a Pro</Text>
        </Card.Content>
      </Card>
    </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 20
  },
  card: {
    width: '100%', 
    padding: 10,
    backgroundColor: '#18DAA3',
    borderWidth: 0,
  },
  text: {
    color: '#333333',
  }
});

export default Banner;