/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { Card, Text } from "react-native-paper";

const data = [
  {
      id: "1",
      imgurl: require('@/assets/images/product/1.jpg'),
      text: 'drink'
  },
  {
      id: "2",
      imgurl: require('@/assets/images/product/2.jpg'),
      text: 'crops'
  },
  {
      id: "3",
      imgurl: require('@/assets/images/product/3.jpg'),
      text: 'fish'
  },
  {
      id: "4",
      imgurl: require('@/assets/images/product/4.jpg'),
      text: 'meat'
  },
  {
      id: "5",
      imgurl: require('@/assets/images/product/5.jpg'),
      text: 'Vegetables'
  },
  {
      id: "6",
      imgurl: require('@/assets/images/product/6.jpg'),
      text: 'dairy'
  },
];

function History() {
  return (
    <View style={styles.container}>
        <Text variant='titleLarge'>Products</Text>
        <View>
        <FlatList
          data={data}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Card style={styles.card}>
              <Card.Content>
                <Image source={item.imgurl} style={styles.image}></Image>
              </Card.Content>
            </Card>
          )}
        />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    paddingTop: 5,
    margin: 5,
    paddingHorizontal: 5,
    gap: 10,
  },
  card: {
    marginRight: 10,
    width: 120,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "transparent",
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 0 },
    elevation: 0,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    // borderRadius: 10,
  }
});

export default History