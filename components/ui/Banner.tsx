import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const Banner = () => (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge">Hello 👋</Text>
          <Text variant="bodyMedium">Scan Like a Detective, Eat Like a Pro</Text>
        </Card.Content>
      </Card>
    </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: '100%',
    padding: 15,
    alignItems: 'center',
  },
  card: {
    width: '100%', 
    padding: 10,
    backgroundColor: '#18DAA3',
    borderWidth: 0,
  },
  text: {
    color: '#fff'
  }
});

export default Banner;